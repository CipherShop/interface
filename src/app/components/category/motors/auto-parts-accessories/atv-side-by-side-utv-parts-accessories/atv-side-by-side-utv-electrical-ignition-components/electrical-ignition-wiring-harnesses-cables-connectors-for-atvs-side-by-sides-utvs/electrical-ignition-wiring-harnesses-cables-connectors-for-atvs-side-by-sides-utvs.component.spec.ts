import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent } from './electrical-ignition-wiring-harnesses-cables-connectors-for-atvs-side-by-sides-utvs.component';

describe('ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent', () => {
  let component: ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent;
  let fixture: ComponentFixture<ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
