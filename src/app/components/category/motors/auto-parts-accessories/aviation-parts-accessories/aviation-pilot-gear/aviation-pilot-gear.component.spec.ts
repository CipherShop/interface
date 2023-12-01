import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationPilotGearComponent } from './aviation-pilot-gear.component';

describe('AviationPilotGearComponent', () => {
  let component: AviationPilotGearComponent;
  let fixture: ComponentFixture<AviationPilotGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationPilotGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationPilotGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
