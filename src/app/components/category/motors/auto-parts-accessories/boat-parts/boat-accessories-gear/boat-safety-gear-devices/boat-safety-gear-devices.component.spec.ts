import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatSafetyGearDevicesComponent } from './boat-safety-gear-devices.component';

describe('BoatSafetyGearDevicesComponent', () => {
  let component: BoatSafetyGearDevicesComponent;
  let fixture: ComponentFixture<BoatSafetyGearDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatSafetyGearDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatSafetyGearDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
