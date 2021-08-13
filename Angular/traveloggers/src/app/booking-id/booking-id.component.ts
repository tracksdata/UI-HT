import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-booking-id',
  templateUrl: './booking-id.component.html',
  styleUrls: ['./booking-id.component.scss']
})
export class BookingIdComponent implements OnInit {

  constructor(private fb: FormBuilder, private flightService: FlightServiceService) { }

  bookingRecord: any;
  passengerRecords: any;
  showBookingDetails: boolean = false;
  noBookingRecord: boolean = false;
  bookingIdForm = this.fb.group({
bookingId: ['']
});

  ngOnInit(): void {
  }

  searchByBookingId() {
      this.flightService.findByBookingId(this.bookingIdForm.get('bookingId').value).subscribe(res => {
      console.log(res);
      if(res) {
        this.bookingRecord = res;
      this.passengerRecords=this.bookingRecord.passenger.coPassengers;
      this.showBookingDetails= true;
      }
      else{
        this.noBookingRecord = true;
      }
      

    })
  }

  checkIn() {
    this.flightService.checkIn(this.bookingRecord.bookingId).subscribe(res => {
      console.log("checkin data", res);
    })
  }

  cancel() {
    console.log("cancel");
    this.showBookingDetails= false;
    this.flightService.cancelBooking(this.bookingRecord.bookingId).subscribe();
    console.log(this.bookingRecord.bookingId);
  }

}
