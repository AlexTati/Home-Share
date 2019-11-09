import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailibilitiesManagerComponent } from './availibilities-manager.component';

describe('AvailibilitiesManagerComponent', () => {
  let component: AvailibilitiesManagerComponent;
  let fixture: ComponentFixture<AvailibilitiesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailibilitiesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailibilitiesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
