import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTrunkCargoBoxesComponent } from './atv-side-by-side-utv-trunk-cargo-boxes.component';

describe('ATVSideBySideUTVTrunkCargoBoxesComponent', () => {
  let component: ATVSideBySideUTVTrunkCargoBoxesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTrunkCargoBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTrunkCargoBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTrunkCargoBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
