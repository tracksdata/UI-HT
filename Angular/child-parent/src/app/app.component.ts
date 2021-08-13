import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count: number = 0;



  buttons = [5, 10, -15, 20, -5, -10, 15, -20,5,-65];
  totalSum: number = 0;

  btnHitsCount() {
    this.count = this.count + 1;
  }

  calculateTotalSum(childBtnValue: number) {
    this.totalSum = this.totalSum + childBtnValue;
  }

}
