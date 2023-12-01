import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHosesLinesPipesComponent } from './car-truck-hoses-lines-pipes.component';

describe('CarTruckHosesLinesPipesComponent', () => {
  let component: CarTruckHosesLinesPipesComponent;
  let fixture: ComponentFixture<CarTruckHosesLinesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHosesLinesPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHosesLinesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
