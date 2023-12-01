import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStereosHeadUnitsComponent } from './car-stereos-head-units.component';

describe('CarStereosHeadUnitsComponent', () => {
  let component: CarStereosHeadUnitsComponent;
  let fixture: ComponentFixture<CarStereosHeadUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStereosHeadUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarStereosHeadUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
