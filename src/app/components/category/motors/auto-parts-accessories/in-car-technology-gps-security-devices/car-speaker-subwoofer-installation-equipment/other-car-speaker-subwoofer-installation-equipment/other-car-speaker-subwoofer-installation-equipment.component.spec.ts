import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarSpeakerSubwooferInstallationEquipmentComponent } from './other-car-speaker-subwoofer-installation-equipment.component';

describe('OtherCarSpeakerSubwooferInstallationEquipmentComponent', () => {
  let component: OtherCarSpeakerSubwooferInstallationEquipmentComponent;
  let fixture: ComponentFixture<OtherCarSpeakerSubwooferInstallationEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarSpeakerSubwooferInstallationEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarSpeakerSubwooferInstallationEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
