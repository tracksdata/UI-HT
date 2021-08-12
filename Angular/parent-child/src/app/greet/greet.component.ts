import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  @Input()
  s1: string = ''

  @Input()
  msg:string = ''

  @Input()
  greetingMessage:any = null;


}
