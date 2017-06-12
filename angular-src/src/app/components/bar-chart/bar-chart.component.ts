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
    responsive: false
  };

  barChartLegend:boolean = true;
  barChartType:string;

  barChartData:any[];
  barChartLabels:string[];

  patients: any[];
  discharged_patients: any[];

  patients$: Observable<any[]>;
  ongoing_patients$: Observable<any[]>;
  discharged_patients$: Observable<any[]>;

  graph_attributes = [
    // TODO: create age ranges {
      // key:'age',
      // name:'Age',
      // for:'patient',
      // chart_type:'bar'
    // },
    {
      key:'sex',
      name:'Sex',
      for:'patient',
      chart_type:'pie'
    },
    {
      key:'site_of_complaint',
      name:'Site of Complaint',
      for:'patient',
      chart_type:'pie'
    },
    {
      key:'treatment_used',
      name:'Treatment Used',
      for:'treatment',
      chart_type:'pie'
    },
    {
        key:'vas_before',
        name:'VAS Before',
        for:'discharged',
        chart_type:'pie'
    },
    {
      key:'vas_after',
      name:'VAS After',
      for:'discharged',
      chart_type:'pie'
    },
    {
      key:'qal_before',
      name:'QAL Before',
      for:'discharged',
      chart_type:'pie'
    },
    {
      key:'qal_after',
      name:'QAL After',
      for:'discharged',
      chart_type:'pie'
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

      let patient_attr = this.graph_attributes.filter(attr => attr.for == 'patient');
      let treatment_attr = this.graph_attributes.filter(attr => attr.for == 'treatment');
      this.graphs = [];

      for(var a in patient_attr) {
        let key = patient_attr[a].key;
        let name = patient_attr[a].name;

        let arr = patients.map(p => p[key]);

        let unique_labels = Array.from(new Set(arr));

        let filtered_data = [];
        unique_labels.forEach(label => {
          filtered_data.push(arr.filter(a => a == label).length);
        });

        let graph = {
          barChartData:[
            {data: filtered_data, label: 'Discharged Patient ' + name}
          ],
          barChartLabels: unique_labels,
          barChartOptions: this.barChartOptions,
          barChartLegend: this.barChartLegend,
          barChartType: patient_attr[a].chart_type,
          chartHovered:this.chartHovered,
          chartClicked: this.chartClicked
        };

        this.graphs.push(graph);
      }

      // Repeat for treatment_attr
      for(var a in treatment_attr) {
        let key = treatment_attr[a].key;
        let name = treatment_attr[a].name;

        let arr = [];
        patients.map(p => p.treatments.map(t => t[key]).forEach(t => {
          arr.push(t);
        }));

        let unique_labels = Array.from(new Set(arr));

        let filtered_data = [];
        unique_labels.forEach(label => {
          filtered_data.push(arr.filter(a => a == label).length);
        });

        let graph = {
          barChartData:[
            {data: filtered_data, label: 'Discharged Patient ' + name}
          ],
          barChartLabels: unique_labels,
          barChartOptions: this.barChartOptions,
          barChartLegend: this.barChartLegend,
          barChartType: treatment_attr[a].chart_type,
          chartHovered:this.chartHovered,
          chartClicked: this.chartClicked
        };

        this.graphs.push(graph);
      }


      // TODO: vas and qal charts
      


      // Filter: Returns an array of patients that match the test
      // var females = patients.filter(patients => patients.age <  40);
      // console.log('Females = ', females);

      // Map: Returns an array with only the required attribute from an object
      // var onlyage = patients.map(p => p.age);
      // console.log('Only age ',onlyage);

    });

  }

  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }

}
