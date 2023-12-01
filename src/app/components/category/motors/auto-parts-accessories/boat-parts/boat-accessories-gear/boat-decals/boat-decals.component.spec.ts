import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatDecalsComponent } from './boat-decals.component';

describe('BoatDecalsComponent', () => {
  let component: BoatDecalsComponent;
  let fixture: ComponentFixture<BoatDecalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatDecalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatDecalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
