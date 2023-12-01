import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableCarGPSSystemsComponent } from './portable-car-gps-systems.component';

describe('PortableCarGPSSystemsComponent', () => {
  let component: PortableCarGPSSystemsComponent;
  let fixture: ComponentFixture<PortableCarGPSSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortableCarGPSSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortableCarGPSSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
