import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckRelaysContactorsComponent } from './electric-car-truck-relays-contactors.component';

describe('ElectricCarTruckRelaysContactorsComponent', () => {
  let component: ElectricCarTruckRelaysContactorsComponent;
  let fixture: ComponentFixture<ElectricCarTruckRelaysContactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckRelaysContactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckRelaysContactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
