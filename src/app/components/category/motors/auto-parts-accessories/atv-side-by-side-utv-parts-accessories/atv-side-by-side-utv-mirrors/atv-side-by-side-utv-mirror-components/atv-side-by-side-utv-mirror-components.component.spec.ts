import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVMirrorComponentsComponent } from './atv-side-by-side-utv-mirror-components.component';

describe('ATVSideBySideUTVMirrorComponentsComponent', () => {
  let component: ATVSideBySideUTVMirrorComponentsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVMirrorComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVMirrorComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVMirrorComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
