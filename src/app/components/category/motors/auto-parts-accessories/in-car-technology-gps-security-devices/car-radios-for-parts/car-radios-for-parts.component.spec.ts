import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRadiosForPartsComponent } from './car-radios-for-parts.component';

describe('CarRadiosForPartsComponent', () => {
  let component: CarRadiosForPartsComponent;
  let fixture: ComponentFixture<CarRadiosForPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRadiosForPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRadiosForPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
