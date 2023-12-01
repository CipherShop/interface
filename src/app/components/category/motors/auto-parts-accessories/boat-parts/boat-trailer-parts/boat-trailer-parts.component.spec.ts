import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatTrailerPartsComponent } from './boat-trailer-parts.component';

describe('BoatTrailerPartsComponent', () => {
  let component: BoatTrailerPartsComponent;
  let fixture: ComponentFixture<BoatTrailerPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatTrailerPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatTrailerPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
