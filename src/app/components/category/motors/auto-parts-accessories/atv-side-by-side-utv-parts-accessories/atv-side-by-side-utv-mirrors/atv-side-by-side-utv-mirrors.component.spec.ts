import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVMirrorsComponent } from './atv-side-by-side-utv-mirrors.component';

describe('ATVSideBySideUTVMirrorsComponent', () => {
  let component: ATVSideBySideUTVMirrorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVMirrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVMirrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVMirrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
