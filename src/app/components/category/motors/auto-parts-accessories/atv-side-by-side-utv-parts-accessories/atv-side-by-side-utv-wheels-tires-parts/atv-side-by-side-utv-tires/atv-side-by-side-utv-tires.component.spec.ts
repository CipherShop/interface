import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTiresComponent } from './atv-side-by-side-utv-tires.component';

describe('ATVSideBySideUTVTiresComponent', () => {
  let component: ATVSideBySideUTVTiresComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
