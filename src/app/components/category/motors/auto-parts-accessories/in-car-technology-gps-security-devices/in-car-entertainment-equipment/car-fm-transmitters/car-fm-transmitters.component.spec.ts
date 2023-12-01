import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFMTransmittersComponent } from './car-fm-transmitters.component';

describe('CarFMTransmittersComponent', () => {
  let component: CarFMTransmittersComponent;
  let fixture: ComponentFixture<CarFMTransmittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFMTransmittersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFMTransmittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
