import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckIdlersTensionersComponent } from './car-truck-idlers-tensioners.component';

describe('CarTruckIdlersTensionersComponent', () => {
  let component: CarTruckIdlersTensionersComponent;
  let fixture: ComponentFixture<CarTruckIdlersTensionersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckIdlersTensionersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckIdlersTensionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
