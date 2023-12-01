import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCatalyticConvertersComponent } from './car-truck-catalytic-converters.component';

describe('CarTruckCatalyticConvertersComponent', () => {
  let component: CarTruckCatalyticConvertersComponent;
  let fixture: ComponentFixture<CarTruckCatalyticConvertersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCatalyticConvertersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCatalyticConvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
