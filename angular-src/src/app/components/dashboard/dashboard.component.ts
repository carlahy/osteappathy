import { Component, OnInit } from '@angular/core';
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
  patient_num: String;
  sex: String;
  age: number;
  occupation: String;
  case: Object;
  selected_patient: Object;
  patients;

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private patientService:PatientService
  ) { }

  ngOnInit() {
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
    const patient = {
      patient_num: this.patient_num,
      sex: this.sex,
      age: this.age,
      occupation: this.occupation,
      case: this.case
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
    // TODO: zoom in on patient
    this.selected_patient = patient;
  }

}
