import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAntiSleepSystemsComponent } from './car-anti-sleep-systems.component';

describe('CarAntiSleepSystemsComponent', () => {
  let component: CarAntiSleepSystemsComponent;
  let fixture: ComponentFixture<CarAntiSleepSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAntiSleepSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAntiSleepSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
