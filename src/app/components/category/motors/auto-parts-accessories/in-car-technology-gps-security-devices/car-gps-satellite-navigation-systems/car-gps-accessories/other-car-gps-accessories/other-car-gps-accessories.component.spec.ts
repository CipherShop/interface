import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarGPSAccessoriesComponent } from './other-car-gps-accessories.component';

describe('OtherCarGPSAccessoriesComponent', () => {
  let component: OtherCarGPSAccessoriesComponent;
  let fixture: ComponentFixture<OtherCarGPSAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarGPSAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarGPSAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
