import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisHomeComponent } from './avis-home.component';

describe('AvisHomeComponent', () => {
  let component: AvisHomeComponent;
  let fixture: ComponentFixture<AvisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
