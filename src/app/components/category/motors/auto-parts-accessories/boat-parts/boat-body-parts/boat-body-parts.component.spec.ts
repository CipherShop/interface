import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatBodyPartsComponent } from './boat-body-parts.component';

describe('BoatBodyPartsComponent', () => {
  let component: BoatBodyPartsComponent;
  let fixture: ComponentFixture<BoatBodyPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatBodyPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatBodyPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
