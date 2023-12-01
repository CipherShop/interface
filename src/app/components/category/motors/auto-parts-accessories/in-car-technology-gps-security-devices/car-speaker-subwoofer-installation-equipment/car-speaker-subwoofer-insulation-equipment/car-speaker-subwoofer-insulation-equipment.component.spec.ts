import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakerSubwooferInsulationEquipmentComponent } from './car-speaker-subwoofer-insulation-equipment.component';

describe('CarSpeakerSubwooferInsulationEquipmentComponent', () => {
  let component: CarSpeakerSubwooferInsulationEquipmentComponent;
  let fixture: ComponentFixture<CarSpeakerSubwooferInsulationEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakerSubwooferInsulationEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakerSubwooferInsulationEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
