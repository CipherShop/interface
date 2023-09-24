import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVExhaustPipesTipsComponent } from './atv-side-by-side-utv-exhaust-pipes-tips.component';

describe('ATVSideBySideUTVExhaustPipesTipsComponent', () => {
  let component: ATVSideBySideUTVExhaustPipesTipsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVExhaustPipesTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVExhaustPipesTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVExhaustPipesTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
