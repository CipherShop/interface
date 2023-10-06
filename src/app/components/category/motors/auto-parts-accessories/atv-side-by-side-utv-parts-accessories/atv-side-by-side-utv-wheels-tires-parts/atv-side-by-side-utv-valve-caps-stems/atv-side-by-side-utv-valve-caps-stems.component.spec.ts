import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVValveCapsStemsComponent } from './atv-side-by-side-utv-valve-caps-stems.component';

describe('ATVSideBySideUTVValveCapsStemsComponent', () => {
  let component: ATVSideBySideUTVValveCapsStemsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVValveCapsStemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVValveCapsStemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVValveCapsStemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
