import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvSideBySideUtvPartsAccessoriesComponent } from './atv-side-by-side-utv-parts-accessories.component';

describe('AtvSideBySideUtvPartsAccessoriesComponent', () => {
  let component: AtvSideBySideUtvPartsAccessoriesComponent;
  let fixture: ComponentFixture<AtvSideBySideUtvPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvSideBySideUtvPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvSideBySideUtvPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
