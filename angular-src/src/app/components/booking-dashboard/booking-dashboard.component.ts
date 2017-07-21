import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DateService } from '../../services/date.service';
import { ResourceService } from '../../services/resource.service';
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

  booking_resource:any[];
  new_booking:any;

  calendarOptions:{[key: string]: any} = {
    fixedWeekCount : false,
    defaultDate: new Date(),
    editable: true,
    eventLimit: true // allow "more" link when too many events
  };

  constructor(
    private http:Http,
    private authService:AuthService,
    private dateService:DateService,
    private resourceService:ResourceService,
    private flashMessage:FlashMessagesService
  ) {
    this.http = http;
    this.authService = authService;
    this.dateService = dateService;
    this.resourceService = resourceService;
    this.flashMessage = flashMessage;

    // Get resources
    this.dateService = dateService;
    this.resourceService = resourceService;
    this.authService = authService;
    this.http = http;

    this.new_booking = {};

    this.resourceService.getResourcesFor('booking').subscribe(data => {
      if(data.success) {
        this.booking_resource = data.resources;
      } else {
        console.log('Something went wrong, booking resources could not be loaded');
      }
    });

  }

  ngOnInit() {
    this.getBookings();
  }

  ngAfterViewInit() {

  }

  getBookings(){
    return $(this.myCalendar.nativeElement).fullCalendar({
      events: function(start, end, timezone, addEventSource) {
        $.ajax({
            url: "http://localhost:8080/bookings/",
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
      }
    });
  }

  addEventSource(events) {
    this.calendarOptions.events = events;
    $(this.myCalendar.nativeElement).fullCalendar('addEventSource', events);
  }

  // ! month is 0 based
  getCurrentMonth() {
    const currentdate = <any>$("#myCalendar").fullCalendar('getDate');
    // console.log("The current date of the calendar is ", currentdate.toString());
    return currentdate.month();
  }

  createBooking() {

    this.new_booking.month = this.dateService.dateFields.months.indexOf(this.new_booking.month);

    var start = this.dateService.formatDateTime(
      this.new_booking.year,
      this.new_booking.month,
      this.new_booking.day,
      this.new_booking.hour,
      this.new_booking.minutes);

    // console.log('Start is ', start);

    let booking = {
      title:this.new_booking.title,
      start:start
    };

    console.log('EVENT ', event);

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('bookings/');
    return this.http.post(ep, booking, {headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
          $(this.myCalendar.nativeElement).fullCalendar('refetchEvents');
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        }
      });
  }

}
