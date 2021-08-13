import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDataService } from '../flight-data.service';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

  constructor(private flightService: FlightServiceService, private flightDataService: FlightDataService,
    private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

    travellers: number;

  bookingForm = this.fb.group({
       firstName: [''],
       lastName: [''],
       emailAddress: [''],
       gender: [''],
       mobileNumber: [''],
       coPassengers: this.fb.array([])

  });

 

  flightAllData: any;
  bookingData: any;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log('params', params);
    this.flightService.findByFid(params.get('id')).subscribe( res => {
      console.log('flight data by id',res);
      this.flightAllData = res;

    })
  })

  console.log("passenger count",this.flightDataService.getPassengerCount());
  this.travellers= this.flightDataService.getPassengerCount();
  this.flightDataService.setPassengerCount(0);
  if(this.travellers && this.travellers > 1) {
    this.travellers--;
    while (this.travellers>0) {
      this.addCoPassenger();
      this.travellers--;
    }
  }

  }

  get coPassenger(){
    return this.bookingForm.get('coPassengers') as FormArray;
  }

  addCoPassenger(){
    let newPassenger = this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
    })
    this.coPassenger.push(newPassenger);
  }

  submitForm() {
    this.flightService.save(this.flightAllData.id, this.coPassenger.length + 1, this.bookingForm.value).subscribe(res => {
      console.log(res);
      this.flightDataService.setFlightData(res);
    this.router.navigateByUrl("/booking");
    });
    
  }


}
