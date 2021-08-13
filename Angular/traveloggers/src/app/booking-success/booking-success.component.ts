import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDataService } from '../flight-data.service';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent implements OnInit {

  constructor(private flightDataService: FlightDataService, private flightService: FlightServiceService, private router :Router) {}

bookingAllData: any;

  ngOnInit(): void {
    this.bookingAllData= this.flightDataService.getFlightData();
      console.log("Booking data",this.bookingAllData);
  }

  checkIn() {
    this.flightService.checkIn(this.bookingAllData.bookingId).subscribe(res => {
      console.log("checkin data", res);
      this.router.navigateByUrl("/checkin");
    })
  }

}
