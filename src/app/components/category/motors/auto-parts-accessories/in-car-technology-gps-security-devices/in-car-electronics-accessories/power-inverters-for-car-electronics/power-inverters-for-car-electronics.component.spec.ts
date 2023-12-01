import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerInvertersForCarElectronicsComponent } from './power-inverters-for-car-electronics.component';

describe('PowerInvertersForCarElectronicsComponent', () => {
  let component: PowerInvertersForCarElectronicsComponent;
  let fixture: ComponentFixture<PowerInvertersForCarElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerInvertersForCarElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerInvertersForCarElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
