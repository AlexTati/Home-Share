import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembreComponent } from './card-membre.component';

describe('CardMembreComponent', () => {
  let component: CardMembreComponent;
  let fixture: ComponentFixture<CardMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
