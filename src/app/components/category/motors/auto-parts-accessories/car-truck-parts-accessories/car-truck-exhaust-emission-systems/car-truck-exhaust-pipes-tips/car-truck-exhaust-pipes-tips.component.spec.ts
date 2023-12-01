import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustPipesTipsComponent } from './car-truck-exhaust-pipes-tips.component';

describe('CarTruckExhaustPipesTipsComponent', () => {
  let component: CarTruckExhaustPipesTipsComponent;
  let fixture: ComponentFixture<CarTruckExhaustPipesTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustPipesTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustPipesTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
