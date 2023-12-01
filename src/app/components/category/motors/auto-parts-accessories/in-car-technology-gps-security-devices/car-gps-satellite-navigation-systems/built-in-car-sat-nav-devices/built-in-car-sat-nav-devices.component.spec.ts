import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInCarSatNavDevicesComponent } from './built-in-car-sat-nav-devices.component';

describe('BuiltInCarSatNavDevicesComponent', () => {
  let component: BuiltInCarSatNavDevicesComponent;
  let fixture: ComponentFixture<BuiltInCarSatNavDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInCarSatNavDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInCarSatNavDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
