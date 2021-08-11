import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  // data types
  // witth data initialization
  name = 'Praveen'
  // with put initial values
  empName: string = '';
  age: number = 0;

  status=false;

  textColor="red";
  bgColor="black"

  





}
