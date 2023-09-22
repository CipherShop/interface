import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAntennasComponent } from './atv-side-by-side-utv-antennas.component';

describe('ATVSideBySideUTVAntennasComponent', () => {
  let component: ATVSideBySideUTVAntennasComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAntennasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAntennasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAntennasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
