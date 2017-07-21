import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';;

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(
    private patientService:PatientService
  ) {
    this.patientService = patientService;
  }

  ngOnInit() {
  }

  hasPatients() {
    if (this.patientService.patients.length > 0) {
      return true;
    } else {
      return false;
    }
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
