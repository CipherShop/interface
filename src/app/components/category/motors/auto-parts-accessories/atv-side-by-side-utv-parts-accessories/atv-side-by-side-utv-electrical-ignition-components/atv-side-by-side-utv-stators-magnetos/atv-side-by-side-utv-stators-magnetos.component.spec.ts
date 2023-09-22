import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVStatorsMagnetosComponent } from './atv-side-by-side-utv-stators-magnetos.component';

describe('ATVSideBySideUTVStatorsMagnetosComponent', () => {
  let component: ATVSideBySideUTVStatorsMagnetosComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVStatorsMagnetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVStatorsMagnetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVStatorsMagnetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
