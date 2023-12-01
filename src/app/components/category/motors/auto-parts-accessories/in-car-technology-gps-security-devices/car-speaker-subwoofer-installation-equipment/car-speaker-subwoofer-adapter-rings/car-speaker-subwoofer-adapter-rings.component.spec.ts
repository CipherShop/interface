import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakerSubwooferAdapterRingsComponent } from './car-speaker-subwoofer-adapter-rings.component';

describe('CarSpeakerSubwooferAdapterRingsComponent', () => {
  let component: CarSpeakerSubwooferAdapterRingsComponent;
  let fixture: ComponentFixture<CarSpeakerSubwooferAdapterRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakerSubwooferAdapterRingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakerSubwooferAdapterRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
