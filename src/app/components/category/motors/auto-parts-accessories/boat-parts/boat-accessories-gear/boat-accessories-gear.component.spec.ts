import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatAccessoriesGearComponent } from './boat-accessories-gear.component';

describe('BoatAccessoriesGearComponent', () => {
  let component: BoatAccessoriesGearComponent;
  let fixture: ComponentFixture<BoatAccessoriesGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatAccessoriesGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatAccessoriesGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
