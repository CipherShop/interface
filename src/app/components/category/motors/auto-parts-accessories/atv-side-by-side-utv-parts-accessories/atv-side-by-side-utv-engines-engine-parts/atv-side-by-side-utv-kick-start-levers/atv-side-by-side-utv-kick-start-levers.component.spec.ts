import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVKickStartLeversComponent } from './atv-side-by-side-utv-kick-start-levers.component';

describe('ATVSideBySideUTVKickStartLeversComponent', () => {
  let component: ATVSideBySideUTVKickStartLeversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVKickStartLeversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVKickStartLeversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVKickStartLeversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
