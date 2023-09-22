import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargerCarryCasesComponent } from './electric-atv-sx-s-utv-charger-carry-cases.component';

describe('ElectricATVSxSUTVChargerCarryCasesComponent', () => {
  let component: ElectricATVSxSUTVChargerCarryCasesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargerCarryCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargerCarryCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargerCarryCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
