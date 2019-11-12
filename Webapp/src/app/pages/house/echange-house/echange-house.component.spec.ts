import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangeHouseComponent } from './echange-house.component';

describe('EchangeHouseComponent', () => {
  let component: EchangeHouseComponent;
  let fixture: ComponentFixture<EchangeHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchangeHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchangeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
