import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVDriveMotorsComponent } from './electric-atv-sx-s-utv-drive-motors.component';

describe('ElectricATVSxSUTVDriveMotorsComponent', () => {
  let component: ElectricATVSxSUTVDriveMotorsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVDriveMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVDriveMotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVDriveMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
