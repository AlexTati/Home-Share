import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDisplayerComponent } from './options-displayer.component';

describe('OptionsDisplayerComponent', () => {
  let component: OptionsDisplayerComponent;
  let fixture: ComponentFixture<OptionsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
