import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from "../components/registration/registration.component";
import {RegistrationFormFieldComponent} from "../components/registration-form-field/registration-form-field.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormFieldComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class RegistrationModule { }
