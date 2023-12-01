import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatControlsSteeringComponent } from './boat-controls-steering.component';

describe('BoatControlsSteeringComponent', () => {
  let component: BoatControlsSteeringComponent;
  let fixture: ComponentFixture<BoatControlsSteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatControlsSteeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatControlsSteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
