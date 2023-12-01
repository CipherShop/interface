import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckRebuildKitsPartsComponent } from './car-truck-rebuild-kits-parts.component';

describe('CarTruckRebuildKitsPartsComponent', () => {
  let component: CarTruckRebuildKitsPartsComponent;
  let fixture: ComponentFixture<CarTruckRebuildKitsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckRebuildKitsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckRebuildKitsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
