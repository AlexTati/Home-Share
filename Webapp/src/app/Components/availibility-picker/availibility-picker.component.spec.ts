import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailibilityPickerComponent } from './availibility-picker.component';

describe('AvailibilityPickerComponent', () => {
  let component: AvailibilityPickerComponent;
  let fixture: ComponentFixture<AvailibilityPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailibilityPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailibilityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
