import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWiringWiringHarnessesComponent } from './car-wiring-wiring-harnesses.component';

describe('CarWiringWiringHarnessesComponent', () => {
  let component: CarWiringWiringHarnessesComponent;
  let fixture: ComponentFixture<CarWiringWiringHarnessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarWiringWiringHarnessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarWiringWiringHarnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
