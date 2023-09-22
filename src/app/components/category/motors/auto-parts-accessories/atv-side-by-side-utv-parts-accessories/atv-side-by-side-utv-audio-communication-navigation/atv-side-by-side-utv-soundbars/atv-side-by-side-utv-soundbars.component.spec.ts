import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSoundbarsComponent } from './atv-side-by-side-utv-soundbars.component';

describe('ATVSideBySideUTVSoundbarsComponent', () => {
  let component: ATVSideBySideUTVSoundbarsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSoundbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSoundbarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSoundbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
