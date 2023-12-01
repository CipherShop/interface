import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckGuideRailsComponent } from './car-truck-guide-rails.component';

describe('CarTruckGuideRailsComponent', () => {
  let component: CarTruckGuideRailsComponent;
  let fixture: ComponentFixture<CarTruckGuideRailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckGuideRailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckGuideRailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
