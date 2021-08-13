import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightDataService } from '../flight-data.service';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  searchFlightForm = this.ff.group(
    {
      origin: ['delhi', [Validators.required]],
      destination: ['chennai', [Validators.required]],
      flightDate: ['2021-05-26', [Validators.required]],
      travellers: [3 , [Validators.required]]
    }
  );

  searchByFlightNumberForm = this.ff.group(
    {
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      flightDate: ['', [Validators.required]],
      flightNumber: ['', [Validators.required]],
      travellers: [ , [Validators.required]]
    }
  );
  isSubmitted: boolean = false;
  showFlightNumberForm: boolean = false;
  flightRecord: boolean = false;
  flightArray: any[] = [];

  constructor(private flightService: FlightServiceService, private flightDataService: FlightDataService, private ff: FormBuilder, private router: Router) { }

  search() {
    if (!this.showFlightNumberForm) {
      this.isSubmitted = true;
      console.log(this.fc.travellers.errors);
      if (this.searchFlightForm.valid) {
        this.flightArray = [];
        console.log('form values', this.searchFlightForm.value);
        this.flightDataService.setPassengerCount(this.searchFlightForm.get('travellers').value);
        this.flightService.findFlights(this.searchFlightForm.value).subscribe(res => {
          console.log(res);
          this.flightArray = [];
          if (res.length > 0) {
            this.flightArray = res;
          }
          else {
            this.flightRecord = true;
          }
        })
      }
    }
  }

  searchFlightNumberForm() {
    if (this.showFlightNumberForm) {
    this.isSubmitted = true
    if (this.searchByFlightNumberForm.valid) {
      this.flightArray = [];
      console.log('form values', this.searchByFlightNumberForm.value);
      this.flightDataService.setPassengerCount(this.searchByFlightNumberForm.get('travellers').value);
      this.flightService.findFlightById(this.searchByFlightNumberForm.value).subscribe(res => {
        console.log(res);
        this.flightArray = [];
        this.flightArray.push(res);
      })
    }
    }
  }

  toggleForm() {
    this.showFlightNumberForm = !this.showFlightNumberForm;
  }

  get fc() {
    return this.searchFlightForm.controls;
  }

  get fb() {
    return this.searchByFlightNumberForm.controls;
  }

  ngOnInit(): void {
  }

}
