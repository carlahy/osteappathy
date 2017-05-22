import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PatientService {

  constructor(private http:Http) { }

  // Set to empty string for heroku prod
  domain:String = 'http://localhost:3000/'

  getPatients(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.domain+'patients/readall', {headers:headers})
      .map(res => res.json());
  }

  createPatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.domain+'patients/create', patient, {headers:headers})
      .map(res => res.json());
  }

}
