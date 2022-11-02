import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-registration-form-field',
  templateUrl: './registration-form-field.component.html',
  styleUrls: ['./registration-form-field.component.scss']
})
export class RegistrationFormFieldComponent {
  @Input() control;
  @Input() inputType: string = 'text';
  @Input() label: string;
  @Input() placeHolder: string;

  getErrorMessage() {
    if (this.control.hasError('min')) {
      return  'Not a valid age';
    }
    return this.control.hasError('required') ? 'You must enter a value' : '';
  }

}

