import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInboardDieselEnginesComponent } from './complete-inboard-diesel-engines.component';

describe('CompleteInboardDieselEnginesComponent', () => {
  let component: CompleteInboardDieselEnginesComponent;
  let fixture: ComponentFixture<CompleteInboardDieselEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteInboardDieselEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteInboardDieselEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
