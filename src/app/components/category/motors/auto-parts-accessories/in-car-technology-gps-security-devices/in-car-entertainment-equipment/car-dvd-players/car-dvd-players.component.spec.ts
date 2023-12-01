import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDVDPlayersComponent } from './car-dvd-players.component';

describe('CarDVDPlayersComponent', () => {
  let component: CarDVDPlayersComponent;
  let fixture: ComponentFixture<CarDVDPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDVDPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDVDPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
