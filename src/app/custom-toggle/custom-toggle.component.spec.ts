import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToggleComponent } from './custom-toggle.component';

describe('CustomToggleComponent', () => {
  let component: CustomToggleComponent;
  let fixture: ComponentFixture<CustomToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
