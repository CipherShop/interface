import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsGearComponent } from './motorcycle-powersports-gear.component';

describe('MotorcyclePowersportsGearComponent', () => {
  let component: MotorcyclePowersportsGearComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
