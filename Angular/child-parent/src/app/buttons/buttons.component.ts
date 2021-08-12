import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Input()
  btnLabel: any = null;

  @Output() // pass child data to parent when event is occured
  totalHitsCount=new EventEmitter(); // passes to the parentt when event occured

  count: number = 0;

  btnHitsCount() {
    this.count = this.count + 1;
    this.totalHitsCount.emit(this.btnLabel); // invokes parent component function

  }


}
