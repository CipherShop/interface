import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatSeatingComponent } from './boat-seating.component';

describe('BoatSeatingComponent', () => {
  let component: BoatSeatingComponent;
  let fixture: ComponentFixture<BoatSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatSeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
