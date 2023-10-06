import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringBellcranksComponent } from './atv-side-by-side-utv-steering-bellcranks.component';

describe('ATVSideBySideUTVSteeringBellcranksComponent', () => {
  let component: ATVSideBySideUTVSteeringBellcranksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringBellcranksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringBellcranksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringBellcranksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
