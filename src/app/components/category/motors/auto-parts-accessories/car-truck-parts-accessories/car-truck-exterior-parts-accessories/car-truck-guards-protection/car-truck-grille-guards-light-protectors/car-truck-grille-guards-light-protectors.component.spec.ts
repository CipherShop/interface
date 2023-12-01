import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckGrilleGuardsLightProtectorsComponent } from './car-truck-grille-guards-light-protectors.component';

describe('CarTruckGrilleGuardsLightProtectorsComponent', () => {
  let component: CarTruckGrilleGuardsLightProtectorsComponent;
  let fixture: ComponentFixture<CarTruckGrilleGuardsLightProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckGrilleGuardsLightProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckGrilleGuardsLightProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
