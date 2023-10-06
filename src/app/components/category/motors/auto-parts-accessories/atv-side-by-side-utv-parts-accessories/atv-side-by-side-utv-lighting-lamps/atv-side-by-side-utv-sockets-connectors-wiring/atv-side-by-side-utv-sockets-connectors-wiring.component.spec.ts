import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSocketsConnectorsWiringComponent } from './atv-side-by-side-utv-sockets-connectors-wiring.component';

describe('ATVSideBySideUTVSocketsConnectorsWiringComponent', () => {
  let component: ATVSideBySideUTVSocketsConnectorsWiringComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSocketsConnectorsWiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSocketsConnectorsWiringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSocketsConnectorsWiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
