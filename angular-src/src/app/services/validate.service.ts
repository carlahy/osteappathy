import { Injectable } from '@angular/core';
import { DateService } from '../services/date.service';
import { PatientService } from '../services/patient.service';

@Injectable()
export class ValidateService {

  constructor(
    private dateService:DateService,
    private patientService:PatientService
  ) {
    this.dateService = dateService;
    this.patientService = patientService;
  }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePatient(){
    let dateReq = ['day','month','year']
    for(var d in dateReq) {
      if(this.patientService.new_patient[dateReq[d]] == undefined) {
        return false;
      }
    }
    this.patientService.new_patient.dob = this.dateService.parseDate(this.patientService.new_patient.year,this.patientService.new_patient.month,this.patientService.new_patient.day);

    for(var r in this.patientService.patient_resource) {
      var key = this.patientService.patient_resource[r].key;
      if(this.patientService.new_patient[key] == undefined) {
        return false;
      } else {
        return true;
      }
    }
  }

  validateTreatment(treatment){
    let dateReq = ['day','month','year']
    for(var d in dateReq) {
      if(this.patientService.new_treatment[dateReq[d]] == undefined) {
        console.log(dateReq[d]);
        return false;
      }
    }
    this.patientService.new_treatment.treatment_date = this.dateService.parseDate(this.patientService.new_treatment.year,this.patientService.new_treatment.month,this.patientService.new_treatment.day);
    //new Date(this.new_treatment.year,this.new_treatment.month,this.new_treatment.day);

    for(var r in this.patientService.treatment_resource) {
      var key = this.patientService.treatment_resource[r].key;
      if(treatment[key] == undefined) {
        return false;
      } else {
        return true;
      }
    }
  }

}
