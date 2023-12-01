import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleKidneyBeltsComponent } from './motorcycle-kidney-belts.component';

describe('MotorcycleKidneyBeltsComponent', () => {
  let component: MotorcycleKidneyBeltsComponent;
  let fixture: ComponentFixture<MotorcycleKidneyBeltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleKidneyBeltsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleKidneyBeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
