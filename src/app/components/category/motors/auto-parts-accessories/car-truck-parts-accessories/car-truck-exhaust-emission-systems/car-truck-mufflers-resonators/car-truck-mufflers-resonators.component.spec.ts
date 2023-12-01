import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckMufflersResonatorsComponent } from './car-truck-mufflers-resonators.component';

describe('CarTruckMufflersResonatorsComponent', () => {
  let component: CarTruckMufflersResonatorsComponent;
  let fixture: ComponentFixture<CarTruckMufflersResonatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckMufflersResonatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckMufflersResonatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
