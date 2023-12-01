import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardElectricalSystemsComponent } from './outboard-electrical-systems.component';

describe('OutboardElectricalSystemsComponent', () => {
  let component: OutboardElectricalSystemsComponent;
  let fixture: ComponentFixture<OutboardElectricalSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardElectricalSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardElectricalSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
