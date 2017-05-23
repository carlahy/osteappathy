import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  selected_patient: Object;

  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit() {
    this.selected_patient = this.patientService.selected_patient;
  }

  isSelectedPatient() {
    if (this.patientService.selected_patient == undefined) {
      return false;
    } else {
      return true;
    }
  }

  // Update patient


}
