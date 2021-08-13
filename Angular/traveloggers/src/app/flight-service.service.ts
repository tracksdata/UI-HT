import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http: HttpClient) { }

  //load all flights
  apiServer = "http://localhost:2020/api/pss/search"
  API_URL = "http://localhost:2020/api/pss/booking"
  APIURL = "http://localhost:2020/api/pss/checkin"


  findFlights(searchQuery): Observable<any> {
    return this.http.post(this.apiServer, searchQuery);
  }

  findFlightById(searchQuery): Observable<any> {
    return this.http.post(`${this.apiServer}/byFlightNumber`, searchQuery);
  }

  findFlightsV1(searchQuery): Observable<any> {
    let url = `${this.apiServer}/${searchQuery.origin}/${searchQuery.destination}/${searchQuery.flightDate}/${searchQuery.travellers}`;
    return this.http.get(url);
  }

  findById(id): Observable<any> {
     return this.http.get(this.apiServer + `/${id}`);
  }

  findByFid(id): Observable<any> {
    return this.http.get(`${this.apiServer}/${id}`);
 }

 findByBookingId(bookingId): Observable<any> {
    return this.http.get(`${this.API_URL}/bookingInformation/${bookingId}`);
 }

  save(flightId, travellers, passengerDetails ): Observable<any> {
    return this.http.post(`${this.API_URL}/${flightId}/${travellers}`, passengerDetails);
  }

  checkIn(bookingId): Observable<any> {
    return this.http.post(`${this.APIURL}/${bookingId}`, bookingId);
  }

  checkInData(bookingId): Observable<any> {
    return this.http.get(`${this.APIURL}/info/${bookingId}`);
  }

  cancelBooking(bookingId): Observable<any> {
    console.log(bookingId);
    return this.http.delete(`${this.API_URL}/${bookingId}`);
  }
}
