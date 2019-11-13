import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseResultSetComponent } from './house-result-set.component';

describe('HouseResultSetComponent', () => {
  let component: HouseResultSetComponent;
  let fixture: ComponentFixture<HouseResultSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseResultSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseResultSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
