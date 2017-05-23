import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { PatientService } from '../../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  // Properties
  patient_num: Number;
  sex: String;
  dob: Date;
  occupation: String;
  // consult: Object;
  consult_date: Date;
  body_part:String;
  injury_detail:String;
  stage: String;
  // TODO: add treatments, discharge
  // ongoing: Boolean;
  patients;
  completed;

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private patientService:PatientService
  ) { }

  ngOnInit() {
    // this.consult_date = new Date();
    this.patients = [];
    this.completed = [];
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatients().subscribe(data => {
      this.patients = [];
      if(data.success) {
        for (var p in data.patients) {
          this.patients.push(data.patients[p]);
        }
      } else {
          this.flashMessage.show('Something went wrong, patients could not be loaded', {cssClass: 'alert-danger', timeout:3000});
        }
    })
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

  createPatient() {
    const dob = this.parseDate(this.dob);
    const ageDate = new Date(Date.now() - dob.getTime());
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const patient = {
      patient_num: this.patient_num,
      sex: this.sex,
      dob: dob,
      age: age,
      occupation: this.occupation,
      consult_date: this.parseDate(this.consult_date),
      body_part: this.body_part,
      injury_detail: this.injury_detail,
      stage: this.stage
    };

    // Required fields
    if(!this.validateService.validatePatient(patient)) {
      this.flashMessage.show('Please fill in required fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    // Create patient
    this.patientService.createPatient(patient).subscribe(data => {
      if(data.success) {
        console.log('Create successful');
        this.flashMessage.show('New patient was created', {cssClass: 'alert-success', timeout:3000});
        this.getPatients();
      } else {
        console.log('Create unsuccessful');
        this.flashMessage.show('Something went wrong, patient could not be created', {cssClass: 'alert-danger', timeout:3000});
      }
    });

  }

  // Set selected patient

  onSelectPatient(patient) {
    this.patientService.setSelectedPatient(patient);
    
    return true;
  }

  onSavePatient(patient) {
    // TODO: update in DB
  }

  hasOngoingPatients() {
    if (this.patients.length > 0) {
      return true;
    } else {
      return false
    }
  }

  hasCompletedPatients(){
    if(this.completed.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
