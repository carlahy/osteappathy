import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PatientService } from '../../services/patient.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  selected_patient: any;
  new_treatment = {};

  constructor(
    private flashMessage:FlashMessagesService,
    private patientService:PatientService,
    private dashboardComponent:DashboardComponent
  ) {
    this.patientService = patientService;
    this.dashboardComponent = dashboardComponent;
  }

  ngOnInit() {
    this.selected_patient = this.patientService.getSelectedPatient();
  }

  getSelectedPatient() {
    if (this.patientService.getSelectedPatient() == undefined) {
      return false;
    } else {
      this.selected_patient = this.patientService.getSelectedPatient();
      return true;
    }
  }

  updatePatient() {
    this.patientService.updatePatient(this.selected_patient).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Saved patient details', {cssClass: 'alert-success', timeout:3000});
        this.patientService.getPatients();
      } else {
        this.flashMessage.show('Something went wrong, patient could not be saved', {cssClass: 'alert-danger', timeout:3000});
      }
    });

  }

  addTreatment() {
    if(!this.patientService.validateTreatment(this.new_treatment)){
      this.flashMessage.show('Please fill in required treatment fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    this.selected_patient.treatments.push(this.new_treatment);
    this.patientService.updatePatient(this.selected_patient).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Added new treatment', {cssClass: 'alert-success', timeout:3000});
        this.patientService.getPatients();
        this.new_treatment = {};
      } else {
        this.flashMessage.show('Something went wrong, treatment could not be added', {cssClass: 'alert-danger', timeout:3000});
      }
    })
  }

  discharge(){
    this.selected_patient.discharged = true;
    this.patientService.updatePatient(this.selected_patient).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Patient has been discharged', {cssClass: 'alert-success', timeout:3000});
        this.patientService.getPatients();
      } else {
        this.flashMessage.show('Something went wrong, patient could not be discharged', {cssClass: 'alert-danger', timeout:3000});
      }
    });
  }

  // Update patient


}
