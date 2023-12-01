import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarKeysFobsRemotesComponent } from './car-keys-fobs-remotes.component';

describe('CarKeysFobsRemotesComponent', () => {
  let component: CarKeysFobsRemotesComponent;
  let fixture: ComponentFixture<CarKeysFobsRemotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarKeysFobsRemotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarKeysFobsRemotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
