import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatPropellersComponent } from './boat-propellers.component';

describe('BoatPropellersComponent', () => {
  let component: BoatPropellersComponent;
  let fixture: ComponentFixture<BoatPropellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatPropellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatPropellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
