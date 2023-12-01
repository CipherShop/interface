import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTerminalsWiringProductsComponent } from './other-car-terminals-wiring-products.component';

describe('OtherCarTerminalsWiringProductsComponent', () => {
  let component: OtherCarTerminalsWiringProductsComponent;
  let fixture: ComponentFixture<OtherCarTerminalsWiringProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTerminalsWiringProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTerminalsWiringProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
