import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInCarEntertainmentEquipmentComponent } from './other-in-car-entertainment-equipment.component';

describe('OtherInCarEntertainmentEquipmentComponent', () => {
  let component: OtherInCarEntertainmentEquipmentComponent;
  let fixture: ComponentFixture<OtherInCarEntertainmentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInCarEntertainmentEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInCarEntertainmentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
