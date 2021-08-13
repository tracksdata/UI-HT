import { Component } from '@angular/core';
import { EMPLOYEES } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public query: any = '';

  title = 'pipes-demo';

  dob = new Date();

  emps = EMPLOYEES;

  emp = {
    id: 1024,
    name: 'Praveen',
    salary: 834684,
    hobbies: ['Cricket', 'Chess', 'Football'],
    dept: {
      id: 11111,
      name: 'HR',
      location: 'Pune'
    }
  }

}

