import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVPartsAccessoriesComponent } from './other-atv-side-by-side-utv-parts-accessories.component';

describe('OtherATVSideBySideUTVPartsAccessoriesComponent', () => {
  let component: OtherATVSideBySideUTVPartsAccessoriesComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
