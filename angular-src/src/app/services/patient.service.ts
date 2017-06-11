import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class PatientService {

  constructor(
    private flashMessage:FlashMessagesService,
    private http:Http,
    private authService:AuthService,
  ) {
      this.authService = authService;
      // Set user id for this session
      this.user_id = this.authService.getUserId();
      this.isDev = false;
      this.new_patient = {};
      this.new_treatment = {};
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      let ep = this.prepEndpoint('resources/');
      this.http.get(ep, {headers:headers})
        .map(res => res.json())
        .subscribe(data => {
          if(data.success) {
            this.patient_resource = [];
            this.treatment_resource = [];

            for (var r in data.resources) {
              if (data.resources[r].for == "Patient") {
                this.patient_resource.push(data.resources[r]);
                this.new_patient[data.resources[r].key] = undefined;
              } else {
                this.treatment_resource.push(data.resources[r]);
                this.new_treatment[data.resources[r].key] = undefined;
              }
            }
          } else {
              console.log('Something went wrong, patients could not be loaded');
            }
        });
  }

  // Properties

  patient_resource:any[];
  treatment_resource:any[];

  new_patient:any;
  new_treatment:any;
  selected_patient:any;

  ongoing_patients = [];
  discharged_patients = [];

  user_id:String;

  isDev:boolean;

  getPatients(){
    var success;
    this.authService.getPatientList().subscribe(data => {
      if(data.success) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        let ep = this.prepEndpoint('patients/user');
        let params = new URLSearchParams();
        params.set('patient_list', data.patient_list);

        this.http.get(ep, {
          search: params,
          headers:headers
        })
          .map(res => res.json())
          .subscribe(data => {
            if(data.success) {
              this.ongoing_patients = [];
              this.discharged_patients = [];
              for (var p in data.patients) {
                if (data.patients[p].discharged == false) {
                  this.ongoing_patients.push(data.patients[p]);
                } else {
                  this.discharged_patients.push(data.patients[p]);
                }
              }
            } else {
              // this.flashMessage.show('Something went wrong, patients could not be loaded', {cssClass: 'alert-danger', timeout:3000});
              console.log('Something went wrong, patients could not be loaded');
            }
          });

      } else {
        console.log('Something went wrong, patients could not be loaded');
      }
    });
    return success;
  }

  validatePatient(){
    for(var r in this.patient_resource) {
      var key = this.patient_resource[r].key;
      if(this.new_patient[key] == undefined) {
        return false;
      } else {
        return true;
      }
    }
  }

  createPatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('patients/create');
    return this.http.post(ep, patient, {headers:headers})
      .map(res => res.json());
  }

  updatePatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('patients/update');
    return this.http.post(ep, {patient:patient}, {headers:headers})
      .map(res => res.json());
  }

  addPatientToUser(patient_id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/newpatient');
    let user_id = this.authService.getUserId();
    return this.http.post(ep, {user_id:user_id,patient_id:patient_id}, {headers:headers})
      .map(res => res.json());
  }

  setSelectedPatient(patient) {
    this.selected_patient = patient;
  }

  getSelectedPatient(){
    return this.selected_patient;
  }

  // Date inputs are binded as strings, convert to Date object
  parseDate(date){
    const d = {
      year: parseInt(date.split("-")[0]),
      month: parseInt(date.split("-")[1])-1,
      day: parseInt(date.split("-")[2])
    };
    return new Date(d.year,d.month,d.day);
  }

  getNewPatient() {
    const dob = this.parseDate(this.new_patient.dob);
    const ageDate = new Date(Date.now() - dob.getTime());
    const age =  Math.abs(ageDate.getUTCFullYear() - 1970);

    this.new_patient.age = age;
    this.new_patient.treatments = [this.new_treatment];
    this.new_patient.discharged = false;
    return this.new_patient;
  }

  prepEndpoint(ep){
    if(this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }

}
