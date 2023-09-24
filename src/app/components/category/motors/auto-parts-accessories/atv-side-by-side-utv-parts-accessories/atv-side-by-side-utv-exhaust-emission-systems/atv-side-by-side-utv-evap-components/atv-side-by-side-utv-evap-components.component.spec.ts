import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEVAPComponentsComponent } from './atv-side-by-side-utv-evap-components.component';

describe('ATVSideBySideUTVEVAPComponentsComponent', () => {
  let component: ATVSideBySideUTVEVAPComponentsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEVAPComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEVAPComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEVAPComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
