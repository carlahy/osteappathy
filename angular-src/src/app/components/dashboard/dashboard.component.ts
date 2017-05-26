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

  ongoing_patients = [];
  discharged_patients = [];

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private patientService:PatientService
  ) {
    this.patientService = patientService;
  }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatients().subscribe(data => {
      if(data.success) {
        this.ongoing_patients = [];
        this.discharged_patients = [];
        for (var p in data.patients) {
          if (data.patients[p].discharged == false) {
            this.ongoing_patients.push(data.patients[p]);
          } else {
            this.discharged_patients.push(data.patients[p]);
          }
        }
      } else {
          this.flashMessage.show('Something went wrong, patients could not be loaded', {cssClass: 'alert-danger', timeout:3000});
        }
    })
  }

  hasOngoingPatients() {
    if (this.ongoing_patients.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  hasDischargedPatients(){
    if(this.discharged_patients.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
