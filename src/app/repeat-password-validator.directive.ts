import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { repeatPassword } from './helpers/helpers';

@Directive({
  selector: '[appRepeatPasswordValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RepeatPasswordValidatorDirective, multi: true}]
})
export class RepeatPasswordValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return repeatPassword(control);
  }
}
