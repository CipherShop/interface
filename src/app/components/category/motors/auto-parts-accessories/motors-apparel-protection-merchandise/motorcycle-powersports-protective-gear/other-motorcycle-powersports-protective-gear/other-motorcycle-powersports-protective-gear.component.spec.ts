import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMotorcyclePowersportsProtectiveGearComponent } from './other-motorcycle-powersports-protective-gear.component';

describe('OtherMotorcyclePowersportsProtectiveGearComponent', () => {
  let component: OtherMotorcyclePowersportsProtectiveGearComponent;
  let fixture: ComponentFixture<OtherMotorcyclePowersportsProtectiveGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherMotorcyclePowersportsProtectiveGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherMotorcyclePowersportsProtectiveGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
