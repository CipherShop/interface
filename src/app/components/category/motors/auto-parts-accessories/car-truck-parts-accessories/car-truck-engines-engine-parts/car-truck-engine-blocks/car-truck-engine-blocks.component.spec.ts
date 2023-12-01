import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineBlocksComponent } from './car-truck-engine-blocks.component';

describe('CarTruckEngineBlocksComponent', () => {
  let component: CarTruckEngineBlocksComponent;
  let fixture: ComponentFixture<CarTruckEngineBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
