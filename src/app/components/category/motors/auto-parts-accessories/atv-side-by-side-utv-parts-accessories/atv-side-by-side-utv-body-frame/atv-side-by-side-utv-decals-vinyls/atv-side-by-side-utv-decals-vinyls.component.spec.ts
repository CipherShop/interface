import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDecalsVinylsComponent } from './atv-side-by-side-utv-decals-vinyls.component';

describe('ATVSideBySideUTVDecalsVinylsComponent', () => {
  let component: ATVSideBySideUTVDecalsVinylsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDecalsVinylsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDecalsVinylsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDecalsVinylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
