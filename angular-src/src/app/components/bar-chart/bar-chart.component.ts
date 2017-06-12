import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

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


  graphs:any[];

  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLegend:boolean = true;
  barChartType:string = 'pie';

  barChartData:any[];
  barChartLabels:string[];

  patients: any[];
  discharged_patients: any[];

  patients$: Observable<any[]>;
  ongoing_patients$: Observable<any[]>;
  discharged_patients$: Observable<any[]>;

  graph_attributes = [
    {
      key:'age',
      name:'Age',
      for:'patient'
    },
    {
      key:'sex',
      name:'Sex',
      for:'patient'
    },
    {
      key:'site_of_complaint',
      name:'Site of Complaint',
      for:'patient'
    },
    {
      key:'treatment_used',
      name:'Treatment Used',
      for:'treatment'
    },
    {
        key:'vas_before',
        name:'VAS Before',
        for:'treatment'
    },
    {
      key:'vas_after',
      name:'VAS After',
      for:'treatment'
    },
    {
      key:'qal_before',
      name:'QAL Before',
      for:'treatment'
    },
    {
      key:'qal_after',
      name:'QAL After',
      for:'treatment'
    }
  ];

  ngOnInit() {

    this.patients$ = this.patientService.subscribeToDataService(1);
    this.patients$.subscribe(patients => {
      this.patients = patients;

    });

    this.discharged_patients$ = this.patientService.subscribeToDataService(3);
    this.discharged_patients$.subscribe(patients => {
      this.discharged_patients = patients;
      // For all graph attributes


      let patient_attr = this.graph_attributes.filter(attr => attr.for == 'patient');
      let treatment_attr = this.graph_attributes.filter(attr => attr.for == 'treatment');

      for(var a in patient_attr) {

        let key = patient_attr[a].key;
        let name = patient_attr[a].name;

        let filtered_data = patients.map(p => p[key]);
        // TODO: find unique values
        let unique_fields = patients.filter(p => p);

        let graph = {
          barChartData:[
            {data: filtered_data, label: 'Discharged Patient ' + name}
          ],
          barChartLabels: unique_fields,
          barChartOptions: this.barChartOptions,
          barChartLegend: this.barChartLegend,
          barChartType: this.barChartType,
          chartHovered:this.chartHovered,
          chartClicked: this.chartClicked
        };

        this.graphs.push(graph);
      }

      // Repeat for treatment_attr
      for(var a in treatment_attr) {

      }

      // Filter: Returns an array of patients that match the test
      // var females = patients.filter(patients => patients.age <  40);
      // console.log('Females = ', females);

      // Map: Returns an array with only the required attribute from an object
      // var onlyage = patients.map(p => p.age);
      // console.log('Only age ',onlyage);
    });

    this.graphs = [
      {
        barChartData:[
          {data: [1,2,3,4,5,6], label: 'Ongoing Patient Site of Complaint'},
          {data: [2,4,6,8,10,12], label: 'Discharged Patients Site of Complaint'}
        ],
        barChartLabels: [ "Cervical Spine", "Thoracic Spine", "Lumbar Spine", "Sacro-iliac Joint", "Upper Extremity", "Lower Extremity" ],
        barChartOptions: this.barChartOptions,
        barChartLegend: this.barChartLegend,
        barChartType: this.barChartType,
        chartHovered:this.chartHovered,
        chartClicked: this.chartClicked
      }
    ]
  }

  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }

}
//
// interface Patient {
//   _id: Number,
//   sex: String
// }
