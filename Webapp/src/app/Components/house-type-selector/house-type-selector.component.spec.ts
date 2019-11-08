import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTypeSelectorComponent } from './house-type-selector.component';

describe('HouseTypeSelectorComponent', () => {
  let component: HouseTypeSelectorComponent;
  let fixture: ComponentFixture<HouseTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
