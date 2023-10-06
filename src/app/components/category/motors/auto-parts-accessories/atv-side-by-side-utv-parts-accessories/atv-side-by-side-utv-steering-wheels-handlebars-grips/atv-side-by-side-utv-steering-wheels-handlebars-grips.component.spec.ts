import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent } from './atv-side-by-side-utv-steering-wheels-handlebars-grips.component';

describe('ATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent', () => {
  let component: ATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
