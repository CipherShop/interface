import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHoodsComponent } from './atv-side-by-side-utv-hoods.component';

describe('ATVSideBySideUTVHoodsComponent', () => {
  let component: ATVSideBySideUTVHoodsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
