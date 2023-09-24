import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHeatShieldsWrapsComponent } from './atv-side-by-side-utv-heat-shields-wraps.component';

describe('ATVSideBySideUTVHeatShieldsWrapsComponent', () => {
  let component: ATVSideBySideUTVHeatShieldsWrapsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHeatShieldsWrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHeatShieldsWrapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHeatShieldsWrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
