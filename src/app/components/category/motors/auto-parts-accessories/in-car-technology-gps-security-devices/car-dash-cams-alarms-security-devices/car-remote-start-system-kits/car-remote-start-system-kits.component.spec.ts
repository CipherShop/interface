import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRemoteStartSystemKitsComponent } from './car-remote-start-system-kits.component';

describe('CarRemoteStartSystemKitsComponent', () => {
  let component: CarRemoteStartSystemKitsComponent;
  let fixture: ComponentFixture<CarRemoteStartSystemKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRemoteStartSystemKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRemoteStartSystemKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
