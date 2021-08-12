import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Input()
  btnLabel: any = null;

  count: number = 0;

  btnHitsCount() {
    this.count = this.count + 1;
  }


}
