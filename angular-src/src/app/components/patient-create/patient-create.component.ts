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

  public dt: Date = new Date();
  public dt2: Date = new Date();
  public minDate: Date = new Date();
  // TODO: maxdate

  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  openedPatient = false;
  openedTreatment = false;

  date = {
    day:[1,2,3,4,5,6,7,8,9,10],
    month:[1,2,3,4,5,6,7,8,9,10],
    year:[2017,2016,2015]
  }

  ngOnInit() {

  }

  createPatient() {

    if(!this.patientService.validatePatient()) {
      this.flashMessage.show('Please fill in required patient fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    if(!this.patientService.validateTreatment(this.patientService.new_patient)){
      this.flashMessage.show('Please fill in required treatment fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    var newPatient =  this.patientService.getNewPatient();
    console.log('Submitting ' ,newPatient);

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

  parseDate(dateString) {
    console.log('Date string = ', dateString);
    // if(dateString) {
    //   return new Date(dateString);
    // } else {
    //   return null;
    // }
  }

  public open(o){
    switch(o){
      case 1: this.openedPatient = !this.openedPatient; break;
      case 2: this.openedTreatment = !this.openedTreatment; break;
      default: break;
    }
    return;
  }

  public getDate() {
    return this.dt || new Date();
  }
}
