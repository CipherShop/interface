import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGPSAccessoriesComponent } from './car-gps-accessories.component';

describe('CarGPSAccessoriesComponent', () => {
  let component: CarGPSAccessoriesComponent;
  let fixture: ComponentFixture<CarGPSAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGPSAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGPSAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
