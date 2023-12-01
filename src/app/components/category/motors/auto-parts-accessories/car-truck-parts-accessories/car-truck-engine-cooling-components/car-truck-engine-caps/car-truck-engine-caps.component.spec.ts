import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineCapsComponent } from './car-truck-engine-caps.component';

describe('CarTruckEngineCapsComponent', () => {
  let component: CarTruckEngineCapsComponent;
  let fixture: ComponentFixture<CarTruckEngineCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
