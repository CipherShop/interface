import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVDriveMotorPartsComponent } from './electric-atv-sx-s-utv-drive-motor-parts.component';

describe('ElectricATVSxSUTVDriveMotorPartsComponent', () => {
  let component: ElectricATVSxSUTVDriveMotorPartsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVDriveMotorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVDriveMotorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVDriveMotorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
