import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { Options } from 'fullcalendar'
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrls: ['./booking-dashboard.component.css']
})
export class BookingDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('myCalendar', { read: ElementRef }) myCalendar: ElementRef;

  isDev:boolean;

  calendarOptions:{[key: string]: any} = {
    fixedWeekCount : false,
    defaultDate: new Date(),
    editable: true,
    eventLimit: true // allow "more" link when too many events
  };

  constructor(
    private http:Http,
    private authService:AuthService
  ) {
    this.http = http;
    this.authService = authService;
    this.isDev = this.authService.isDev;

  }

  ngOnInit() {
    this.getBookings().subscribe(data => {
      if(data.success) {
        this.calendarOptions.events = data.events;
        $(this.myCalendar.nativeElement).fullCalendar('addEventSource', data.events);
        console.log('Current month ', this.getCurrentMonth());
      } else {
        console.log('Something went wrong, bookings could not be loaded');
      }
    });
  }

  ngAfterViewInit() {



  }

  // ! month is 0 based
  getCurrentMonth() {
    const currentdate = <any>$("#myCalendar").fullCalendar('getDate');
    // console.log("The current date of the calendar is ", currentdate.toString());
    return currentdate.month();
  }

  getBookings(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('bookings/all');
    return this.http.get(ep, {headers:headers})
      .map(res => res.json());
  }

  prepEndpoint(ep){
    if(this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }

}
