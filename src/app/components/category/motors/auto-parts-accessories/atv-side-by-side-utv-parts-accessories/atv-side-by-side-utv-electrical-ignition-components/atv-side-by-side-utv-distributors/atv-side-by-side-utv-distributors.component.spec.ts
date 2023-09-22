import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDistributorsComponent } from './atv-side-by-side-utv-distributors.component';

describe('ATVSideBySideUTVDistributorsComponent', () => {
  let component: ATVSideBySideUTVDistributorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDistributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDistributorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
