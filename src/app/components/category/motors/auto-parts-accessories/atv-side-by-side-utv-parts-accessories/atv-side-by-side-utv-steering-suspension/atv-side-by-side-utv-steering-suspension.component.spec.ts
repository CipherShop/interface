import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringSuspensionComponent } from './atv-side-by-side-utv-steering-suspension.component';

describe('ATVSideBySideUTVSteeringSuspensionComponent', () => {
  let component: ATVSideBySideUTVSteeringSuspensionComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringSuspensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringSuspensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringSuspensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
