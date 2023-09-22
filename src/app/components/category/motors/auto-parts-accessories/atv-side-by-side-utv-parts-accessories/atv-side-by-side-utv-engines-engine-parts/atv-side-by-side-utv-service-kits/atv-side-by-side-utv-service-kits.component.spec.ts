import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVServiceKitsComponent } from './atv-side-by-side-utv-service-kits.component';

describe('ATVSideBySideUTVServiceKitsComponent', () => {
  let component: ATVSideBySideUTVServiceKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVServiceKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVServiceKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVServiceKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
