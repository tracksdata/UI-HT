import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent to Child Comuunication';
  geetMesaage: string = ''

  greetChild(msg: string) {
    this.geetMesaage = msg;
  }
}
