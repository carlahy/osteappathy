import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PatientService {

  constructor(private http:Http) { }

  // Set to empty string for heroku prod
  domain:String = 'http://localhost:3000/';

  // Properties
  patient_num: Number;
  sex: String;
  dob: Date;
  occupation: String;
  body_part:String;
  injury_detail:String;
  stage: String;
  treatments: [Object];
  treatment_date: Date;
  vas: Number;
  qal: Number;
  notes: String;
  discharged: Boolean;
  private selected_patient: Object;

  getPatients(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this.domain+'patients/readall', {headers:headers})
      .map(res => res.json());
  }

  validatePatient(){
    if(this.patient_num == undefined ||
      this.sex == undefined ||
      this.dob == undefined ||
      this.occupation == undefined ||
      this.body_part == undefined ||
      this.injury_detail == undefined ||
      this.stage == undefined ||
      this.treatment_date == undefined ||
      this.vas == undefined ||
      this.qal == undefined) {
      return false;
    } else {
      return true;
    }
  }

  createPatient(patient){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.domain+'patients/create', patient, {headers:headers})
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
    const dob = this.parseDate(this.dob);
    const ageDate = new Date(Date.now() - dob.getTime());
    const age =  Math.abs(ageDate.getUTCFullYear() - 1970);

    return {
      patient_num: this.patient_num,
      sex: this.sex,
      dob: dob,
      age: age,
      occupation: this.occupation,
      body_part:this.body_part,
      injury_detail: this.injury_detail,
      stage: this.stage,
      treatments: [{
        treatment_date: this.parseDate(this.treatment_date),
        vas: this.vas,
        qal: this.qal,
        notes: this.notes
      }],
      discharged: false
    };
  }

  getTreatment(){
    return {
      treatment_date: this.parseDate(this.treatment_date),
      vas: this.vas,
      qal: this.qal,
      notes: this.notes
    };
  }

}
