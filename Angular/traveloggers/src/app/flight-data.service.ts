import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  private bookingData: any;

  private passengerCount: number;

  constructor() { }

  setFlightData(flightData) {
    this.bookingData = flightData;
    console.log("service set booking data",this.bookingData);
  }

  getFlightData() {
    console.log("service get booking data",this.bookingData);
    return this.bookingData;
  }

  getPassengerCount() {
    return this.passengerCount;
}

setPassengerCount(passengerCount) {
  this.passengerCount= passengerCount;
}
}
