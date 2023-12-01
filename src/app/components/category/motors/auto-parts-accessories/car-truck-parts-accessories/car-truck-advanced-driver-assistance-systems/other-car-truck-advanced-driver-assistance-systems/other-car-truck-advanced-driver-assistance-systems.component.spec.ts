import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckAdvancedDriverAssistanceSystemsComponent } from './other-car-truck-advanced-driver-assistance-systems.component';

describe('OtherCarTruckAdvancedDriverAssistanceSystemsComponent', () => {
  let component: OtherCarTruckAdvancedDriverAssistanceSystemsComponent;
  let fixture: ComponentFixture<OtherCarTruckAdvancedDriverAssistanceSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckAdvancedDriverAssistanceSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckAdvancedDriverAssistanceSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
