import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  treatment_date: Date;
  vas: Number;
  qal: Number;
  notes: String;


  constructor(private patientService:PatientService) {
    this.patientService = patientService;
  }

  ngOnInit() {
  }

}
