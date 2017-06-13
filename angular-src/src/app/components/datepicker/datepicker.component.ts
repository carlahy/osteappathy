import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../../services/patient.service'
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() key: any;
  @Input() model: any;

  public dt: Date = new Date();
  public minDate: Date = new Date();
  // TODO: maxdate

  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;
  private closed: boolean = true;

  constructor(
    private patientService:PatientService
  ) {
    this.patientService = patientService;
  }

  ngOnInit() {
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
  }

  public getDate() {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  public today(): void {
    this.dt = new Date();
  }

  public open(): void {
    this.opened = !this.opened;
  }

}
