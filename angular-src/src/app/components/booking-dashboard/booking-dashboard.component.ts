import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { Options } from 'fullcalendar'
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrls: ['./booking-dashboard.component.css']
})
export class BookingDashboardComponent implements OnInit {

  @ViewChild('myCalendar', { read: ElementRef }) myCalendar: ElementRef;

  calendarOptions:{[key: string]: any} = {
    header: {center:'month,agendaWeek'},
    fixedWeekCount : false,
    defaultDate: new Date(),
    editable: true,
    eventLimit: true // allow "more" link when too many events
  };

  constructor(
    private http:Http,
    private authService:AuthService,
    private bookingService:BookingService
  ) {
    this.http = http;
    this.authService = authService;
    this.bookingService = bookingService;
  }

  ngOnInit() {
    this.getBookings();

    // Observe new event
    this.bookingService.onNewEvent$.subscribe(data => {
      this.refetchEvents();
    });
  }

  getBookings(){
    var url = this.authService.prepEndpoint('bookings/');
    return $(this.myCalendar.nativeElement).fullCalendar({
      events: function(start, end, timezone, addEventSource) {
        $.ajax({
          url: url,
          dataType: 'json',
          // data: {
          //   // our hypothetical feed requires UNIX timestamps
          //   start: start.unix(),
          //   end: end.unix()
          // },
          success: function(res) {
            addEventSource(res.events);
          }
        });
      },
      eventClick: function(eventcal, jsEvent, view) {
        console.log('Event ', eventcal);
        // $('#eventModal').toggle();
      }
    });
  }

  addEventSource(events) {
    this.calendarOptions.events = events;
    $(this.myCalendar.nativeElement).fullCalendar('addEventSource', events);
  }

  refetchEvents(){
    $(this.myCalendar.nativeElement).fullCalendar('refetchEvents');
  }

  // ! month is 0 based
  getCurrentMonth() {
    const currentdate = <any>$("#myCalendar").fullCalendar('getDate');
    return currentdate.month();
  }

}
