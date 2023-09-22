import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVBatteryAccessoriesComponent } from './electric-atv-sx-s-utv-battery-accessories.component';

describe('ElectricATVSxSUTVBatteryAccessoriesComponent', () => {
  let component: ElectricATVSxSUTVBatteryAccessoriesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVBatteryAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVBatteryAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVBatteryAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
