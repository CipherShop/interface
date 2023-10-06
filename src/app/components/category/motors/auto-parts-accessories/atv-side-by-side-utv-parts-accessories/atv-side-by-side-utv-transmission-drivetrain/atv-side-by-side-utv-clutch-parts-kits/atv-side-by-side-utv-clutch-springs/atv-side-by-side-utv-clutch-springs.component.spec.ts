import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchSpringsComponent } from './atv-side-by-side-utv-clutch-springs.component';

describe('ATVSideBySideUTVClutchSpringsComponent', () => {
  let component: ATVSideBySideUTVClutchSpringsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchSpringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
