import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleVestsComponent } from './motorcycle-vests.component';

describe('MotorcycleVestsComponent', () => {
  let component: MotorcycleVestsComponent;
  let fixture: ComponentFixture<MotorcycleVestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleVestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleVestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
