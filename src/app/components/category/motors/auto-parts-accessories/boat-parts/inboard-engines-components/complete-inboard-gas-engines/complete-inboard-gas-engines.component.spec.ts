import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInboardGasEnginesComponent } from './complete-inboard-gas-engines.component';

describe('CompleteInboardGasEnginesComponent', () => {
  let component: CompleteInboardGasEnginesComponent;
  let fixture: ComponentFixture<CompleteInboardGasEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteInboardGasEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteInboardGasEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
