import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTerminalsWiringRelaysComponent } from './car-terminals-wiring-relays.component';

describe('CarTerminalsWiringRelaysComponent', () => {
  let component: CarTerminalsWiringRelaysComponent;
  let fixture: ComponentFixture<CarTerminalsWiringRelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTerminalsWiringRelaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTerminalsWiringRelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
