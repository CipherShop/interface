import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckDecalsVinylComponent } from './car-truck-decals-vinyl.component';

describe('CarTruckDecalsVinylComponent', () => {
  let component: CarTruckDecalsVinylComponent;
  let fixture: ComponentFixture<CarTruckDecalsVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckDecalsVinylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckDecalsVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
