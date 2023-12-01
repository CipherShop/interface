import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMultimediaPlayersComponent } from './car-multimedia-players.component';

describe('CarMultimediaPlayersComponent', () => {
  let component: CarMultimediaPlayersComponent;
  let fixture: ComponentFixture<CarMultimediaPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMultimediaPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarMultimediaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
