import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInCarSoundSystemsComponent } from './complete-in-car-sound-systems.component';

describe('CompleteInCarSoundSystemsComponent', () => {
  let component: CompleteInCarSoundSystemsComponent;
  let fixture: ComponentFixture<CompleteInCarSoundSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteInCarSoundSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteInCarSoundSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
