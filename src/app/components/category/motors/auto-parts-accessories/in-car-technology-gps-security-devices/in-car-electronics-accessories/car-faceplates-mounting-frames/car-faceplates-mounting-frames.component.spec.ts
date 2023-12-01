import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFaceplatesMountingFramesComponent } from './car-faceplates-mounting-frames.component';

describe('CarFaceplatesMountingFramesComponent', () => {
  let component: CarFaceplatesMountingFramesComponent;
  let fixture: ComponentFixture<CarFaceplatesMountingFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFaceplatesMountingFramesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFaceplatesMountingFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
