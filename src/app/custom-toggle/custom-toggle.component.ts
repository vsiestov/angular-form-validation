import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomToggleComponent),
      multi: true
    }
  ]
})
export class CustomToggleComponent implements ControlValueAccessor {
  @Input() value: string;

  constructor() {
  }

  propagateChange = (_: any) => {
  };

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  onChange(event: Event) {
    const el = event.target as HTMLInputElement;

    console.log(el.value);

    this.propagateChange(el.value);
  }
}
