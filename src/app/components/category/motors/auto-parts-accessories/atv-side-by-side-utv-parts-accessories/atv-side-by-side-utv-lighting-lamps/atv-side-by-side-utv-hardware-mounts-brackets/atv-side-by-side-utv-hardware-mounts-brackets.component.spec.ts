import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHardwareMountsBracketsComponent } from './atv-side-by-side-utv-hardware-mounts-brackets.component';

describe('ATVSideBySideUTVHardwareMountsBracketsComponent', () => {
  let component: ATVSideBySideUTVHardwareMountsBracketsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHardwareMountsBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHardwareMountsBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHardwareMountsBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
