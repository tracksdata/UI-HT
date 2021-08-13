import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input()
  flightData: any;

  constructor() { }

  book() {
    
  }

  ngOnInit(): void {
  }

}
