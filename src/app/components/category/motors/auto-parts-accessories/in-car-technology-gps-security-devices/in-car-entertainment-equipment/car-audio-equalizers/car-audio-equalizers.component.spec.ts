import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAudioEqualizersComponent } from './car-audio-equalizers.component';

describe('CarAudioEqualizersComponent', () => {
  let component: CarAudioEqualizersComponent;
  let fixture: ComponentFixture<CarAudioEqualizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAudioEqualizersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAudioEqualizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
