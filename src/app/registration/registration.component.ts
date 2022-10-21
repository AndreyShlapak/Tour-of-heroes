import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      city: new FormControl(null, [
        Validators.required
      ]),
      yearsOld: new FormControl(null, [
        Validators.min(12),
        Validators.required
      ])
    });
  }

  submit() {
    console.log(this.form)

  }
}
