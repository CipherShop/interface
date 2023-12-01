import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBoatAccessoriesGearComponent } from './other-boat-accessories-gear.component';

describe('OtherBoatAccessoriesGearComponent', () => {
  let component: OtherBoatAccessoriesGearComponent;
  let fixture: ComponentFixture<OtherBoatAccessoriesGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBoatAccessoriesGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherBoatAccessoriesGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
