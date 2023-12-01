import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatAntennasComponent } from './boat-antennas.component';

describe('BoatAntennasComponent', () => {
  let component: BoatAntennasComponent;
  let fixture: ComponentFixture<BoatAntennasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatAntennasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatAntennasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
