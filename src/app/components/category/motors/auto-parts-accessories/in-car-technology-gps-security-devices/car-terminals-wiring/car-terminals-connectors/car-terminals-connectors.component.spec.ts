import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTerminalsConnectorsComponent } from './car-terminals-connectors.component';

describe('CarTerminalsConnectorsComponent', () => {
  let component: CarTerminalsConnectorsComponent;
  let fixture: ComponentFixture<CarTerminalsConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTerminalsConnectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTerminalsConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
