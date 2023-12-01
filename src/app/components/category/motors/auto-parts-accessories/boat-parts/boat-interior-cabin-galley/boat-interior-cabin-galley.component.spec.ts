import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatInteriorCabinGalleyComponent } from './boat-interior-cabin-galley.component';

describe('BoatInteriorCabinGalleyComponent', () => {
  let component: BoatInteriorCabinGalleyComponent;
  let fixture: ComponentFixture<BoatInteriorCabinGalleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatInteriorCabinGalleyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatInteriorCabinGalleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
