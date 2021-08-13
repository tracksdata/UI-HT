import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  prodForm = new FormGroup({});
  isSubmited: boolean = false;
  constructor(private fb: FormBuilder) { }

  handleSubmit() {
    this.isSubmited = true;
    console.log(this.prodForm.controls);

    console.log(">>>> Submited...");
    console.log(this.prodForm.value);
  }

  fc() {
    return this.prodForm.controls;
  }

  validateDate(): ValidatorFn { 
    return (control: AbstractControl): { [key: string]: boolean } => {
      if (!control.value) {
        return {};
      }

      if (control && control.value && !moment(control.value, 'DD-MM-YYYY', true).isValid()) {
        return { 'invalidDate': true };
      }
      else {
        return {}
      }

    };
  }

  ngOnInit(): void {

    this.prodForm = this.fb.group(
      {
        productId: ['', [Validators.required, Validators.minLength(3)]],
        productName: ['', [Validators.required]],
        price: [0.0, [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{2}?$)')]],
        stockDate: ['', [Validators.required, this.validateDate()]],
        description: ['', [Validators.required]]
      }
    );
  }

  f1() {
    console.log(">>> Clicked...");

  }

}
