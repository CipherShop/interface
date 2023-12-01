import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakersComponent } from './car-speakers.component';

describe('CarSpeakersComponent', () => {
  let component: CarSpeakersComponent;
  let fixture: ComponentFixture<CarSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
