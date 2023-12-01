import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatPartsComponent } from './boat-parts.component';

describe('BoatPartsComponent', () => {
  let component: BoatPartsComponent;
  let fixture: ComponentFixture<BoatPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
