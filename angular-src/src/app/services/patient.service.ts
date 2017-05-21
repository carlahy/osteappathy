import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PatientService {

  constructor(private http:Http) { }

  getPatients(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('patients/profile', {headers:headers})
      .map(res => res.json());
  }

  createPatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('patients/create', patient, {headers:headers})
      .map(res => res.json());
  }

}
