import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCDDVDChangersComponent } from './car-cd-dvd-changers.component';

describe('CarCDDVDChangersComponent', () => {
  let component: CarCDDVDChangersComponent;
  let fixture: ComponentFixture<CarCDDVDChangersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCDDVDChangersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCDDVDChangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
