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
  patient_number: String;
  sex: String;
  age: number;
  occupation: String;
  case: Object;
  selected_patient: Object;
  patients: [Object];

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private patientService:PatientService
  ) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients => {
      for (var p in patients) {
        this.patients.push(p);
      }
    }, err => {
      console.log('Error '+err);
      return false;
    })
  }

  createPatient() {
    const patient = {
      patient_number: this.patient_number,
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
