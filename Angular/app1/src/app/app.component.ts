import { Component } from '@angular/core';

@Component({ // '@ is called Decarator' 
  selector: 'app-root', // component name 
  templateUrl: './app.component.html'
})

export class AppComponent { // AppComponent is a class name
  
  // why this class?
  name='Praveen';
  age=293; // interpolation

  // class can load data from a  server.... 
  // code to fetch data from server and assign datat to a variable name

  // JSON ->  Java Script Object Notation

  emp={
    id:'ABC-1024',
    name:'Praveen',
    salary:48739443
  }
}
