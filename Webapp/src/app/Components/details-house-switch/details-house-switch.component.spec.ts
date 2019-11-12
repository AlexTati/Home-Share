import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHouseSwitchComponent } from './details-house-switch.component';

describe('DetailsHouseSwitchComponent', () => {
  let component: DetailsHouseSwitchComponent;
  let fixture: ComponentFixture<DetailsHouseSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHouseSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHouseSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
