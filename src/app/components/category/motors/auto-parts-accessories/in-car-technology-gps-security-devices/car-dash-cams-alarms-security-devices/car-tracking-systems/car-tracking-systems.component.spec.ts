import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrackingSystemsComponent } from './car-tracking-systems.component';

describe('CarTrackingSystemsComponent', () => {
  let component: CarTrackingSystemsComponent;
  let fixture: ComponentFixture<CarTrackingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTrackingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTrackingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
