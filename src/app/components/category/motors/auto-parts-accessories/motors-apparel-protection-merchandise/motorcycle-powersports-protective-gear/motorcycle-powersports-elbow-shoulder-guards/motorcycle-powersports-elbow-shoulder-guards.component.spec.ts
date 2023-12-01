import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsElbowShoulderGuardsComponent } from './motorcycle-powersports-elbow-shoulder-guards.component';

describe('MotorcyclePowersportsElbowShoulderGuardsComponent', () => {
  let component: MotorcyclePowersportsElbowShoulderGuardsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsElbowShoulderGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsElbowShoulderGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsElbowShoulderGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
