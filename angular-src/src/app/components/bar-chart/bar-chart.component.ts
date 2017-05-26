import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(
    private flashMessage:FlashMessagesService,
    private patientService:PatientService
  ) {
    this.patientService = patientService;
  }

  ongoing_patients = [];
  discharged_patients = [];

  ngOnInit() {
    // Get all patients
    // this.patientService.getPatients().subscribe(data => {
    //   if(data.success) {
    //     this.ongoing_patients = [];
    //     this.discharged_patients = [];
    //     for (var p in data.patients) {
    //       if (data.patients[p].discharged == false) {
    //         this.ongoing_patients.push(data.patients[p]);
    //       } else {
    //         this.discharged_patients.push(data.patients[p]);
    //       }
    //     }
    //   } else {
    //       this.flashMessage.show('Something went wrong, patients could not be loaded', {cssClass: 'alert-danger', timeout:3000});
    //     }
    // })
    // sex
    // age
    // patient_num
    // vas


  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLegend:boolean = true;
  public barChartType:string = 'bar';


  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Body part'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Sex'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Age'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'VAS'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'QAL'}
  ];
  public barChartLabels:string[] = ['123', '456', '654', '45666', '876', '45662', '2346'];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
