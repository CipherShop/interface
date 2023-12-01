import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMotorcyclePowersportsGearComponent } from './other-motorcycle-powersports-gear.component';

describe('OtherMotorcyclePowersportsGearComponent', () => {
  let component: OtherMotorcyclePowersportsGearComponent;
  let fixture: ComponentFixture<OtherMotorcyclePowersportsGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherMotorcyclePowersportsGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherMotorcyclePowersportsGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
