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
    $(this.myCalendar.nativeElement).fullCalendar({
      events: function(start, end, timezone, updateBookings) {
        $.ajax({
            url: "http://localhost:8080/bookings/all",
            dataType: 'json',
            // data: {
            //   // our hypothetical feed requires UNIX timestamps
            //   start: start.unix(),
            //   end: end.unix()
            // },
            success: function(res) {
              updateBookings(res.events);
            }
        });
      }
    });
  }

  ngAfterViewInit() {

  }

  updateBookings(events) {
    this.calendarOptions.events = events;
    $(this.myCalendar.nativeElement).fullCalendar('addEventSource', events);
  }

  // ! month is 0 based
  getCurrentMonth() {
    const currentdate = <any>$("#myCalendar").fullCalendar('getDate');
    // console.log("The current date of the calendar is ", currentdate.toString());
    return currentdate.month();
  }

}
