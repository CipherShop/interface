import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSuspensionSpringsComponent } from './atv-side-by-side-utv-suspension-springs.component';

describe('ATVSideBySideUTVSuspensionSpringsComponent', () => {
  let component: ATVSideBySideUTVSuspensionSpringsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSuspensionSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSuspensionSpringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSuspensionSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
