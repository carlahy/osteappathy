import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { DateService } from '../services/date.service';
import { ResourceService } from '../services/resource.service';
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

  constructor(
    private http:Http,
    private authService:AuthService,
    private dateService:DateService,
    private resourceService:ResourceService
  ) {
      this.resourceService = resourceService;
      this.dateService = dateService;
      this.user_id = this.authService.getUserId();

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
      this.resourceService.getResources().subscribe(data => {
        if(data.success) {

          this.patient_resource = [];
          this.treatment_resource = [];

          for (var r in data.resources) {
            if (data.resources[r].for == "patient") {
              this.patient_resource.push(data.resources[r]);
              this.new_patient[data.resources[r].key] = undefined;
            } else if(data.resources[r].for == "treatment"){
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
    let ep = this.authService.prepEndpoint('users/patients');
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
    let ep = this.authService.prepEndpoint('patients/user');
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

        const ageDate = new Date(Date.now() - new Date(data.patients[p].dob).getTime());
        const age =  Math.abs(ageDate.getUTCFullYear() - 1970);
        data.patients[p].age = age;

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

  createPatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('patients/create');
    return this.http.post(ep, patient, {headers:headers})
      .map(res => res.json());
  }

  updatePatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('patients/update');
    return this.http.post(ep, {patient:patient}, {headers:headers})
      .map(res => res.json());
  }

  addPatientToUser(patient_id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('users/newpatient');
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

  getNewPatient() {
    this.new_patient.treatments = [this.new_treatment];
    this.new_patient.discharged = false;
    console.log('New patient ', this.new_patient);
    return this.new_patient;
  }

}
