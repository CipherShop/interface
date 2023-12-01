import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakerSubwooferInstallationEquipmentComponent } from './car-speaker-subwoofer-installation-equipment.component';

describe('CarSpeakerSubwooferInstallationEquipmentComponent', () => {
  let component: CarSpeakerSubwooferInstallationEquipmentComponent;
  let fixture: ComponentFixture<CarSpeakerSubwooferInstallationEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakerSubwooferInstallationEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakerSubwooferInstallationEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
