import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGPSAdaptersChargersComponent } from './car-gps-adapters-chargers.component';

describe('CarGPSAdaptersChargersComponent', () => {
  let component: CarGPSAdaptersChargersComponent;
  let fixture: ComponentFixture<CarGPSAdaptersChargersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGPSAdaptersChargersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGPSAdaptersChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
