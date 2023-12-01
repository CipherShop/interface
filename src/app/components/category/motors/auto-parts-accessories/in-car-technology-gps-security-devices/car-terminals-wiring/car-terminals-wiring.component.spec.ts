import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTerminalsWiringComponent } from './car-terminals-wiring.component';

describe('CarTerminalsWiringComponent', () => {
  let component: CarTerminalsWiringComponent;
  let fixture: ComponentFixture<CarTerminalsWiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTerminalsWiringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTerminalsWiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
