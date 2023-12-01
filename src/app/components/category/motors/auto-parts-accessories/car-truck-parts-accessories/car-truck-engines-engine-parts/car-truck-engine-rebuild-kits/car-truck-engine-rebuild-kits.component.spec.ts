import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineRebuildKitsComponent } from './car-truck-engine-rebuild-kits.component';

describe('CarTruckEngineRebuildKitsComponent', () => {
  let component: CarTruckEngineRebuildKitsComponent;
  let fixture: ComponentFixture<CarTruckEngineRebuildKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineRebuildKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineRebuildKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
