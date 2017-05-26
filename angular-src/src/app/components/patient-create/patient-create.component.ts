import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PatientService } from '../../services/patient.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(
    private flashMessage:FlashMessagesService,
    private patientService: PatientService,
    private dashboardComponent:DashboardComponent
  ) {
    this.patientService = patientService;
    this.dashboardComponent = dashboardComponent;
  }

  ngOnInit() {
  }

  createPatient() {

    // Required fields
    if(!this.patientService.validatePatient()) {
      this.flashMessage.show('Please fill in required fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    var newPatient =  this.patientService.getNewPatient();

    // Create patient
    this.patientService.createPatient(newPatient).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
        this.patientService.getPatients();
      } else {
        console.log(data);
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
      }
    });
    this.dashboardComponent.getPatients();
  }

}
