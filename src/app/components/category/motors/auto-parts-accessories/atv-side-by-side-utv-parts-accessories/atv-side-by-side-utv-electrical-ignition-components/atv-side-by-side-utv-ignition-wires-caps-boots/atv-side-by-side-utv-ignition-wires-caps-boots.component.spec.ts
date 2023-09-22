import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVIgnitionWiresCapsBootsComponent } from './atv-side-by-side-utv-ignition-wires-caps-boots.component';

describe('ATVSideBySideUTVIgnitionWiresCapsBootsComponent', () => {
  let component: ATVSideBySideUTVIgnitionWiresCapsBootsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVIgnitionWiresCapsBootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVIgnitionWiresCapsBootsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVIgnitionWiresCapsBootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
