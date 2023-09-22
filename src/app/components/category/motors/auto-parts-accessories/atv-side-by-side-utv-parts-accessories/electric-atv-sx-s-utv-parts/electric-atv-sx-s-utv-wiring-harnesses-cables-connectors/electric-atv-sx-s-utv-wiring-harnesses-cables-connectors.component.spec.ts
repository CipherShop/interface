import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent } from './electric-atv-sx-s-utv-wiring-harnesses-cables-connectors.component';

describe('ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent', () => {
  let component: ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
