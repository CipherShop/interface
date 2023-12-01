import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCarburetorPartsComponent } from './car-truck-carburetor-parts.component';

describe('CarTruckCarburetorPartsComponent', () => {
  let component: CarTruckCarburetorPartsComponent;
  let fixture: ComponentFixture<CarTruckCarburetorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCarburetorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCarburetorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
