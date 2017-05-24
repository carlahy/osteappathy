import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  selected_patient: any;

  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit() {
    this.selected_patient = this.patientService.getSelectedPatient();
  }

  isSelectedPatient() {
    if (this.patientService.getSelectedPatient() == undefined) {
      return false;
    } else {
      this.selected_patient = this.patientService.getSelectedPatient();
      return true;
    }
  }

  // Update patient


}
