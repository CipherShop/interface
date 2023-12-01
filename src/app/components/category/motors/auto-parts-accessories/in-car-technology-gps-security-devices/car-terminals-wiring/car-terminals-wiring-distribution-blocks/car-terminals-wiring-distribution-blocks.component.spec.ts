import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTerminalsWiringDistributionBlocksComponent } from './car-terminals-wiring-distribution-blocks.component';

describe('CarTerminalsWiringDistributionBlocksComponent', () => {
  let component: CarTerminalsWiringDistributionBlocksComponent;
  let fixture: ComponentFixture<CarTerminalsWiringDistributionBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTerminalsWiringDistributionBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTerminalsWiringDistributionBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
