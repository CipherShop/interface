import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatDeckCabinHardwareComponent } from './boat-deck-cabin-hardware.component';

describe('BoatDeckCabinHardwareComponent', () => {
  let component: BoatDeckCabinHardwareComponent;
  let fixture: ComponentFixture<BoatDeckCabinHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatDeckCabinHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatDeckCabinHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
