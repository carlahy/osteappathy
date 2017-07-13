import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../../services/patient.service'
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() key: string;
  @Input() model: string;

  public today: Date = new Date();
  public year = this.today.getUTCFullYear();

  public dateFields = {
    days: Array(31),
    months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
    years: Array(100)
  };

  constructor(
    private patientService:PatientService
  ) {
    this.patientService = patientService;
  }

  ngOnInit() {
    console.log(this.key + ' and ' + this.model);
  }

  public getDate() {
    return this.today && this.today.getTime() || new Date().getTime();
  }

}
