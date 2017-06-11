import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private patientService:PatientService,
    private authService:AuthService
  ) {
    this.patientService = patientService;
    this.authService = authService;
  }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    let patient_list = this.authService.getPatientList();
    this.patientService.getPatients();
  }

  hasOngoingPatients() {
    if (this.patientService.ongoing_patients.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  hasDischargedPatients(){
    if(this.patientService.discharged_patients.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
