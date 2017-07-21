import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PatientService } from '../../services/patient.service';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(
    private flashMessage:FlashMessagesService,
    private patientService: PatientService,
    private dateService: DateService
  ) {
    this.patientService = patientService;
    this.dateService = dateService;
  }

  ngOnInit() {

  }

  createPatient() {

    if(!this.patientService.validatePatient()) {
      this.flashMessage.show('Please fill in required patient fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    if(!this.patientService.validateTreatment(this.patientService.new_treatment)){
      this.flashMessage.show('Please fill in required treatment fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    var newPatient =  this.patientService.getNewPatient();

    this.patientService.createPatient(newPatient).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
        this.patientService.addPatientToUser(data.patient_id).subscribe(data => {
          if(data.success) {
            this.patientService.loadPatients();
          } else {
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
          }
        });
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
      }
    });
  }

}
