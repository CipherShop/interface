import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatPaintMaintenanceComponent } from './boat-paint-maintenance.component';

describe('BoatPaintMaintenanceComponent', () => {
  let component: BoatPaintMaintenanceComponent;
  let fixture: ComponentFixture<BoatPaintMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatPaintMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatPaintMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
