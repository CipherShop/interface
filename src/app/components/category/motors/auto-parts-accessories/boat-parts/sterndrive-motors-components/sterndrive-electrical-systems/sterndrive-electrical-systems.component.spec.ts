import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveElectricalSystemsComponent } from './sterndrive-electrical-systems.component';

describe('SterndriveElectricalSystemsComponent', () => {
  let component: SterndriveElectricalSystemsComponent;
  let fixture: ComponentFixture<SterndriveElectricalSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveElectricalSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveElectricalSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
