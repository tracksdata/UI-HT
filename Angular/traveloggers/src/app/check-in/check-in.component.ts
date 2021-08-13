import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  bookingRecord: any;
  checkinRecord: any;
  passengerRecords: any;
  showCheckedIn: boolean = false;
  checkinIdForm = this.fb.group({
    bookingId: ['']
    });
  constructor(private fb:FormBuilder, private flightService: FlightServiceService) { }

  ngOnInit(): void {
  }

  checkIn() {
    this.flightService.findByBookingId(this.checkinIdForm.get('bookingId').value).subscribe(res => {
      this.bookingRecord = res;
      // if(this.bookingRecord.status === 'CONFIRMED') {
      //   this.flightService.checkIn(this.bookingRecord.bookingId).subscribe(res => {
      //     console.log("checkin data", res);
      //     this.checkinRecord = res;
      //   })
      // }
      // else{
      //   this.showCheckedIn = true;
      //   console.log("already checked in");
      //   }

      if(this.bookingRecord.status === 'CONFIRMED') {
        this.checkinBooking(this.bookingRecord.bookingId);
      }
      else if(this.bookingRecord.status === 'CHECKED-IN') {
        this.showCheckedIn = true;
        console.log("already checked in");
      this.flightService.checkInData(this.bookingRecord.bookingId).subscribe(res => {
        console.log(res);
        this.checkinRecord = res;
        this.passengerRecords=this.checkinRecord.bookingRecord.passenger.coPassengers;
      })
      }
    })
  }

  checkinBooking(bookingId: number) {
    this.flightService.checkIn(bookingId).subscribe(res => {
          console.log("checkin data", res);
          this.checkinRecord = res;
          this.passengerRecords=this.checkinRecord.bookingRecord.passenger.coPassengers;
    })

  }
  

}
