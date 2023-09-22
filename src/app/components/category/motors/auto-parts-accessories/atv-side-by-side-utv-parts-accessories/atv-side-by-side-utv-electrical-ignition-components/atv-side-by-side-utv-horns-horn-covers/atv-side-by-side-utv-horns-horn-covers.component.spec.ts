import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHornsHornCoversComponent } from './atv-side-by-side-utv-horns-horn-covers.component';

describe('ATVSideBySideUTVHornsHornCoversComponent', () => {
  let component: ATVSideBySideUTVHornsHornCoversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHornsHornCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHornsHornCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHornsHornCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
