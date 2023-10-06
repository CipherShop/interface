import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent } from './other-atv-side-by-side-utv-steering-wheels-handlebars-grips.component';

describe('OtherATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent', () => {
  let component: OtherATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVSteeringWheelsHandlebarsGripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
