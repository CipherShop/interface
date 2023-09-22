import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargerHoldersComponent } from './electric-atv-sx-s-utv-charger-holders.component';

describe('ElectricATVSxSUTVChargerHoldersComponent', () => {
  let component: ElectricATVSxSUTVChargerHoldersComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargerHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargerHoldersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargerHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
