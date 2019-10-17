import { AbstractControl } from '@angular/forms';

export const repeatPassword = (control: AbstractControl) => {
  const form = control.parent && control.parent.controls as {
    [key: string]: AbstractControl
  };

  if (form && control.value !== form.password.value) {
    return {
      repeatPassword: true
    };
  }

  return null;
};
