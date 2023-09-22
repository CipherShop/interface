import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVSwitchesComponent } from './electric-atv-sx-s-utv-switches.component';

describe('ElectricATVSxSUTVSwitchesComponent', () => {
  let component: ElectricATVSxSUTVSwitchesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
