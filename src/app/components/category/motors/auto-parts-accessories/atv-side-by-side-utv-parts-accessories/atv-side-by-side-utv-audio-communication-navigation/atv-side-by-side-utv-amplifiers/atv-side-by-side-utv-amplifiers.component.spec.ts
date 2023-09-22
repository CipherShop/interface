import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAmplifiersComponent } from './atv-side-by-side-utv-amplifiers.component';

describe('ATVSideBySideUTVAmplifiersComponent', () => {
  let component: ATVSideBySideUTVAmplifiersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAmplifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAmplifiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAmplifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
