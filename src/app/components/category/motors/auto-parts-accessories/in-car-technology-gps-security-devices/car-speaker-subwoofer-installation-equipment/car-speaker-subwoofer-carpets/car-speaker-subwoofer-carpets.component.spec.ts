import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakerSubwooferCarpetsComponent } from './car-speaker-subwoofer-carpets.component';

describe('CarSpeakerSubwooferCarpetsComponent', () => {
  let component: CarSpeakerSubwooferCarpetsComponent;
  let fixture: ComponentFixture<CarSpeakerSubwooferCarpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakerSubwooferCarpetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakerSubwooferCarpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
