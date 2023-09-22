import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSprocketsComponent } from './atv-side-by-side-utv-sprockets.component';

describe('ATVSideBySideUTVSprocketsComponent', () => {
  let component: ATVSideBySideUTVSprocketsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSprocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSprocketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSprocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
