import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName:  new FormControl('', [
        Validators.required,
      ]),

      lastName: new FormControl('', [
        Validators.required,
      ]),

      city: new FormControl('', [
        Validators.required,
      ]),

      age:  new FormControl('', [
        Validators.required,
        Validators.min(12),
      ])
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
