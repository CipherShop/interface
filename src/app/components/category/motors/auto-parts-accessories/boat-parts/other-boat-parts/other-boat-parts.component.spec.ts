import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBoatPartsComponent } from './other-boat-parts.component';

describe('OtherBoatPartsComponent', () => {
  let component: OtherBoatPartsComponent;
  let fixture: ComponentFixture<OtherBoatPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBoatPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherBoatPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
