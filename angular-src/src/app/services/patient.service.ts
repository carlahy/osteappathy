import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


@Injectable()
export class PatientService {

  patients: any[] = [];
  ongoing_patients: any[] = [];
  discharged_patients: any[] = [];

  patients$: BehaviorSubject<any[]>;
  ongoing_patients$: BehaviorSubject<any[]>;
  discharged_patients$: BehaviorSubject<any[]>;

  patient_list:any;

  patient_resource: any[];
  treatment_resource: any[];

  patient_resource$: BehaviorSubject<any[]>;
  treatment_resource$: BehaviorSubject<any[]>;

  new_patient:any;
  new_treatment:any;
  selected_patient:any;

  user_id:String;

  isDev:boolean;

  constructor(
    private http:Http,
    private authService:AuthService,
  ) {
      this.user_id = this.authService.getUserId();

      this.isDev = true;

      this.new_patient = {};
      this.new_treatment = {};

      this.patients$ = <BehaviorSubject<any[]>> new BehaviorSubject([]);
      this.ongoing_patients$ = <BehaviorSubject<any[]>> new BehaviorSubject([]);
      this.discharged_patients$ = <BehaviorSubject<any[]>> new BehaviorSubject([]);

      this.patient_resource$ = <BehaviorSubject<any[]>> new BehaviorSubject([])
        .asObservable();
      this.treatment_resource$ = <BehaviorSubject<any[]>> new BehaviorSubject([])
          .asObservable();

      // Resources for patients and treatments - only needs to be loaded once
      this.getResources().subscribe(data => {
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
            console.log('Something went wrong, resources could not be loaded');
          }
      });

      this.loadPatients();
  }

  subscribeToDataService(d) {
    switch(d) {
      case 1: return this.patients$.asObservable();
      case 2: return this.ongoing_patients$.asObservable();
      case 3: return this.discharged_patients$.asObservable();
      default: break;
    }
    return;
  }

  getResources() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('resources/');
    return this.http.get(ep, {headers:headers})
      .map(res => res.json());
  }

  loadPatients(){
    this.getPatientList().subscribe(data => {
      this.patient_list = data.patient_list;
      if (this.patient_list.length == 0) {
        console.log('No patients to load');
      } else {
        this.getPatients();
      }
    });
  }

  getPatientList(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/patients');
    let params = new URLSearchParams();
    params.set('user_id', this.authService.getUserId());

    return this.http.get(ep, {
      search: params,
      headers:headers
    })
      .map(res => res.json());
  }

  getPatients(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('patients/user');
    let params = new URLSearchParams();
    params.set('patient_list', this.patient_list);

    this.http.get(ep, {
      search: params,
      headers:headers
    })
    .map(res => res.json())
    .subscribe(data => {
      this.patients = data.patients;
      this.ongoing_patients = [];
      this.discharged_patients = [];

      for (var p in data.patients) {
        if (data.patients[p].discharged == false) {
          this.ongoing_patients.push(data.patients[p]);
        } else {
          this.discharged_patients.push(data.patients[p]);
        }
      }

      // Push new copy of patient to all Subscribers
      this.patients$.next(this.patients);
      this.ongoing_patients$.next(this.ongoing_patients);
      this.discharged_patients$.next(this.discharged_patients);
    }, err => {
      console.log('Something went wrong, patients could not be loaded; in patient service, getPatients()');
    });
  }

  getAllPatients() {
    // TODO: get all patients in patient collection
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

  // TODO: call this function
  validateTreatment(treatment){
    for(var r in this.treatment_resource) {
      var key = this.treatment_resource[r].key;
      if(treatment[key] == undefined) {
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
