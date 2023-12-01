import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImmobilisersComponent } from './car-immobilisers.component';

describe('CarImmobilisersComponent', () => {
  let component: CarImmobilisersComponent;
  let fixture: ComponentFixture<CarImmobilisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImmobilisersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarImmobilisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
