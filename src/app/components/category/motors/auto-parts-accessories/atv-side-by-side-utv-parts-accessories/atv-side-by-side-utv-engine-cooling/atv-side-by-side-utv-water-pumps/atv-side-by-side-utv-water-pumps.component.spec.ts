import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWaterPumpsComponent } from './atv-side-by-side-utv-water-pumps.component';

describe('ATVSideBySideUTVWaterPumpsComponent', () => {
  let component: ATVSideBySideUTVWaterPumpsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWaterPumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWaterPumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWaterPumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
