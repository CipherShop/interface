import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAlternatorsGeneratorsComponent } from './atv-side-by-side-utv-alternators-generators.component';

describe('ATVSideBySideUTVAlternatorsGeneratorsComponent', () => {
  let component: ATVSideBySideUTVAlternatorsGeneratorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAlternatorsGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAlternatorsGeneratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAlternatorsGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
