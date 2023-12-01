import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAmplifierPartsAccessoriesComponent } from './car-amplifier-parts-accessories.component';

describe('CarAmplifierPartsAccessoriesComponent', () => {
  let component: CarAmplifierPartsAccessoriesComponent;
  let fixture: ComponentFixture<CarAmplifierPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAmplifierPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAmplifierPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
