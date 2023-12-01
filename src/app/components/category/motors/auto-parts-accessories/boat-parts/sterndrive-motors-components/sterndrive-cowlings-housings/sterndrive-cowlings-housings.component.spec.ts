import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveCowlingsHousingsComponent } from './sterndrive-cowlings-housings.component';

describe('SterndriveCowlingsHousingsComponent', () => {
  let component: SterndriveCowlingsHousingsComponent;
  let fixture: ComponentFixture<SterndriveCowlingsHousingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveCowlingsHousingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveCowlingsHousingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
