import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardElectricalSystemsComponent } from './inboard-electrical-systems.component';

describe('InboardElectricalSystemsComponent', () => {
  let component: InboardElectricalSystemsComponent;
  let fixture: ComponentFixture<InboardElectricalSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardElectricalSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardElectricalSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
