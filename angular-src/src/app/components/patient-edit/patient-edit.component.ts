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

  onSavePatient() {
    console.log('Saving patient ', this.selected_patient);
    this.patientService.createPatient(this.selected_patient).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Saved patient details', {cssClass: 'alert-success', timeout:3000});
        this.patientService.getPatients();
      } else {
        this.flashMessage.show('Something went wrong, patient could not be saved', {cssClass: 'alert-danger', timeout:3000});
      }
    });

  }

  addTreatment() {

  }

  discharge(){

  }

  // Update patient


}
