import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringKnucklesComponent } from './atv-side-by-side-utv-steering-knuckles.component';

describe('ATVSideBySideUTVSteeringKnucklesComponent', () => {
  let component: ATVSideBySideUTVSteeringKnucklesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringKnucklesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringKnucklesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringKnucklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
