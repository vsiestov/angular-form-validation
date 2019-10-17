import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { repeatPassword } from '../helpers/helpers';

@Component({
  selector: 'app-custom-form-element',
  templateUrl: './custom-form-element.component.html',
  styleUrls: ['./custom-form-element.component.scss']
})
export class CustomFormElementComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      direction: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)]],
      repeatPassword: ['', [Validators.required, repeatPassword]]
    });
  }

  ngOnInit() {
  }

}
