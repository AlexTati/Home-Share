import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFromSocialComponent } from './register-from-social.component';

describe('RegisterFromSocialComponent', () => {
  let component: RegisterFromSocialComponent;
  let fixture: ComponentFixture<RegisterFromSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFromSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFromSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
