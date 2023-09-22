import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVDriveMotorsPartsComponent } from './electric-atv-sx-s-utv-drive-motors-parts.component';

describe('ElectricATVSxSUTVDriveMotorsPartsComponent', () => {
  let component: ElectricATVSxSUTVDriveMotorsPartsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVDriveMotorsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVDriveMotorsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVDriveMotorsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
