import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVReflectorsComponent } from './atv-side-by-side-utv-reflectors.component';

describe('ATVSideBySideUTVReflectorsComponent', () => {
  let component: ATVSideBySideUTVReflectorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVReflectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVReflectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVReflectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
