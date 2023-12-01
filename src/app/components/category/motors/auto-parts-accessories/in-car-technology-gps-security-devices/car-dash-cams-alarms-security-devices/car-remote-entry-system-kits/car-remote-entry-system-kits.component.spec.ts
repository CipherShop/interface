import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRemoteEntrySystemKitsComponent } from './car-remote-entry-system-kits.component';

describe('CarRemoteEntrySystemKitsComponent', () => {
  let component: CarRemoteEntrySystemKitsComponent;
  let fixture: ComponentFixture<CarRemoteEntrySystemKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRemoteEntrySystemKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRemoteEntrySystemKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
