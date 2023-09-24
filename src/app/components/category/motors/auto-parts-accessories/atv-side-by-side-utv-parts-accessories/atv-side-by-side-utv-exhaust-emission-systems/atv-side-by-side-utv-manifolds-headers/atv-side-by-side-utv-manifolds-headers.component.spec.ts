import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVManifoldsHeadersComponent } from './atv-side-by-side-utv-manifolds-headers.component';

describe('ATVSideBySideUTVManifoldsHeadersComponent', () => {
  let component: ATVSideBySideUTVManifoldsHeadersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVManifoldsHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVManifoldsHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVManifoldsHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
