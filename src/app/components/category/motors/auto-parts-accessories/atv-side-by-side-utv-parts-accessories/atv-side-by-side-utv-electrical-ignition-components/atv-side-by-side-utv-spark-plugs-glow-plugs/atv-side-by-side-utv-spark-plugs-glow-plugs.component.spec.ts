import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSparkPlugsGlowPlugsComponent } from './atv-side-by-side-utv-spark-plugs-glow-plugs.component';

describe('ATVSideBySideUTVSparkPlugsGlowPlugsComponent', () => {
  let component: ATVSideBySideUTVSparkPlugsGlowPlugsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSparkPlugsGlowPlugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSparkPlugsGlowPlugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSparkPlugsGlowPlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
