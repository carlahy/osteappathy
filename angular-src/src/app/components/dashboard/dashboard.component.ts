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

  patient_num: String;
  sex: String;
  dob: Date;
  occupation: String;
  // consult: Object;
  consult_date:number = Date.now();
  body_part:String;
  injury_detail:String;
  stage: String;
  // TODO: add treatments, discharge
  // ongoing: Boolean;
  selected_patient: Object;
  patients;
  completed;

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private patientService:PatientService
  ) { }

  ngOnInit() {
    this.patients = [];
    this.completed = [];
    this.patientService.getPatients().subscribe(data => {
      this.patients = [];
      if(data.success) {
        for (var p in data.patients) {
          this.patients.push(data.patients[p]);
        }
        console.log(this.patients);
      } else {
          this.flashMessage.show('Something went wrong, patients could not be loaded', {cssClass: 'alert-danger', timeout:3000});
        }
    })
  }

  createPatient() {
    const today = new Date();
    const patient = {
      patient_num: this.patient_num,
      sex: this.sex,
      dob: this.dob,
      age: this.dob.getTime() - today.getTime(),
      occupation: this.occupation,
      consult_date: this.consult_date,
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
        this.flashMessage.show('New patient was created', {cssClass: 'alert-success', timeout:3000});
      } else {
        this.flashMessage.show('Something went wrong, patient could not be created', {cssClass: 'alert-danger', timeout:3000});
      }
    });

  }

  onSelectPatient(patient) {
    this.selected_patient = patient;
    return true;
  }

  isSelectedPatient() {
    if (this.selected_patient == undefined) {
      return false;
    } else {
      return true;
    }
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
