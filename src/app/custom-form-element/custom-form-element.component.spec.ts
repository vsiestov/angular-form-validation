import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormElementComponent } from './custom-form-element.component';

describe('CustomFormElementComponent', () => {
  let component: CustomFormElementComponent;
  let fixture: ComponentFixture<CustomFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
