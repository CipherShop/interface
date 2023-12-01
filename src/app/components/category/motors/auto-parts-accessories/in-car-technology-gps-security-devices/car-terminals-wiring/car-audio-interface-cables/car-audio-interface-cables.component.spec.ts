import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAudioInterfaceCablesComponent } from './car-audio-interface-cables.component';

describe('CarAudioInterfaceCablesComponent', () => {
  let component: CarAudioInterfaceCablesComponent;
  let fixture: ComponentFixture<CarAudioInterfaceCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAudioInterfaceCablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAudioInterfaceCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
