import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatJetDrivesComponent } from './boat-jet-drives.component';

describe('BoatJetDrivesComponent', () => {
  let component: BoatJetDrivesComponent;
  let fixture: ComponentFixture<BoatJetDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatJetDrivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatJetDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
