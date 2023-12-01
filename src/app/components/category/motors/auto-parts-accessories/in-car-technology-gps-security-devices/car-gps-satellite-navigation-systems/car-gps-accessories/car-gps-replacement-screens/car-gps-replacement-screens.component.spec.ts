import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGPSReplacementScreensComponent } from './car-gps-replacement-screens.component';

describe('CarGPSReplacementScreensComponent', () => {
  let component: CarGPSReplacementScreensComponent;
  let fixture: ComponentFixture<CarGPSReplacementScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGPSReplacementScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGPSReplacementScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
