import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHandlebarsComponent } from './atv-side-by-side-utv-handlebars.component';

describe('ATVSideBySideUTVHandlebarsComponent', () => {
  let component: ATVSideBySideUTVHandlebarsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHandlebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHandlebarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHandlebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
