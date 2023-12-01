import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarElectronicsAdaptersPlugsComponent } from './car-electronics-adapters-plugs.component';

describe('CarElectronicsAdaptersPlugsComponent', () => {
  let component: CarElectronicsAdaptersPlugsComponent;
  let fixture: ComponentFixture<CarElectronicsAdaptersPlugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarElectronicsAdaptersPlugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarElectronicsAdaptersPlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
