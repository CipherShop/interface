import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBlowersFansComponent } from './car-truck-blowers-fans.component';

describe('CarTruckBlowersFansComponent', () => {
  let component: CarTruckBlowersFansComponent;
  let fixture: ComponentFixture<CarTruckBlowersFansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBlowersFansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBlowersFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
