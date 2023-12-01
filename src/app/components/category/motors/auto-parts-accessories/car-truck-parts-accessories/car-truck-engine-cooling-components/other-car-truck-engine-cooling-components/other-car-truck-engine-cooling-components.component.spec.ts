import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckEngineCoolingComponentsComponent } from './other-car-truck-engine-cooling-components.component';

describe('OtherCarTruckEngineCoolingComponentsComponent', () => {
  let component: OtherCarTruckEngineCoolingComponentsComponent;
  let fixture: ComponentFixture<OtherCarTruckEngineCoolingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckEngineCoolingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckEngineCoolingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
