import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsProtectiveGearComponent } from './motorcycle-powersports-protective-gear.component';

describe('MotorcyclePowersportsProtectiveGearComponent', () => {
  let component: MotorcyclePowersportsProtectiveGearComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsProtectiveGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsProtectiveGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsProtectiveGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
