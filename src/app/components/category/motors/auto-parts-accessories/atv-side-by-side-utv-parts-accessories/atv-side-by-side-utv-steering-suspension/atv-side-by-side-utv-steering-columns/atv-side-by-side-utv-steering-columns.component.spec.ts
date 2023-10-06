import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringColumnsComponent } from './atv-side-by-side-utv-steering-columns.component';

describe('ATVSideBySideUTVSteeringColumnsComponent', () => {
  let component: ATVSideBySideUTVSteeringColumnsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
