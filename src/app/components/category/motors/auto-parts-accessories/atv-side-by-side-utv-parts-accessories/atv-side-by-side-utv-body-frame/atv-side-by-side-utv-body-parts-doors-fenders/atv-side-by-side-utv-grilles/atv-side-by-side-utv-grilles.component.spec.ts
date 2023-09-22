import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGrillesComponent } from './atv-side-by-side-utv-grilles.component';

describe('ATVSideBySideUTVGrillesComponent', () => {
  let component: ATVSideBySideUTVGrillesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGrillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGrillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGrillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
