import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCompassesComponent } from './boat-compasses.component';

describe('BoatCompassesComponent', () => {
  let component: BoatCompassesComponent;
  let fixture: ComponentFixture<BoatCompassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatCompassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatCompassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
