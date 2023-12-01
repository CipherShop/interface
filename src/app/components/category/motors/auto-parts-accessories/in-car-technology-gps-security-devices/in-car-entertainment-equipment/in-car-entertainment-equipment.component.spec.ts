import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarEntertainmentEquipmentComponent } from './in-car-entertainment-equipment.component';

describe('InCarEntertainmentEquipmentComponent', () => {
  let component: InCarEntertainmentEquipmentComponent;
  let fixture: ComponentFixture<InCarEntertainmentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarEntertainmentEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarEntertainmentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
