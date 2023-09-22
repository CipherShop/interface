import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVConversionKitsComponent } from './electric-atv-sx-s-utv-conversion-kits.component';

describe('ElectricATVSxSUTVConversionKitsComponent', () => {
  let component: ElectricATVSxSUTVConversionKitsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVConversionKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVConversionKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVConversionKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
