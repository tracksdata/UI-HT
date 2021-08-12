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

  imagePath="assets/images/red-i20.png";
  sourceStation:string ='';
  personName:string = '';

  f1(data:string){

  }

  f2(colorName:string){
    this.textColor=colorName;
  }

  changeCarImage(imageName:string){
  this.imagePath="assets/images/"+imageName+".png";
  }

  f3(data2:string){
    this.personName=data2;
  }

  





}
