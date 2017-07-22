import { Component, OnInit } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { ResourceService } from '../../services/resource.service';
import { DateService } from '../../services/date.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookingService } from '../../services/booking.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css']
})

export class BookingCreateComponent implements OnInit {

  booking_resource:any[];
  new_booking:any;

  constructor(
    private resourceService:ResourceService,
    private dateService:DateService,
    private authService:AuthService,
    private http:Http,
    private flashMessage:FlashMessagesService,
    private bookingService:BookingService
  ) {
    this.dateService = dateService;
    this.resourceService = resourceService;
    this.authService = authService;
    this.http = http;
    this.flashMessage = flashMessage;
    this.bookingService = bookingService;

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
  }

  createBooking() {

    this.new_booking.month = this.dateService.dateFields.months.indexOf(this.new_booking.month);

    var start = this.dateService.formatDateTime(
      this.new_booking.year,
      this.new_booking.month,
      this.new_booking.day,
      this.new_booking.hour,
      this.new_booking.minutes);

    let booking = {
      title:this.new_booking.title,
      start:start
    };

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('bookings/');
    return this.http.post(ep, booking, {headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
          this.bookingService.successNewEvent();
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        }
      });
  }

}
