import { Component, OnInit } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { ResourceService } from '../../services/resource.service';
import { DateService } from '../../services/date.service';
import { AuthService } from '../../services/auth.service';

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
    private http:Http
  ) {
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
  }

  createBooking() {
    console.log('Creating event from data ', this.new_booking);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('bookings/');
    return this.http.post(ep, this.new_booking, {headers:headers})
      .map(res => res.json());
  }

}
