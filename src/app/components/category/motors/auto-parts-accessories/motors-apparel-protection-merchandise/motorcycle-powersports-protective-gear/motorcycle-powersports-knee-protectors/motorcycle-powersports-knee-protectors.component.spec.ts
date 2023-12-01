import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsKneeProtectorsComponent } from './motorcycle-powersports-knee-protectors.component';

describe('MotorcyclePowersportsKneeProtectorsComponent', () => {
  let component: MotorcyclePowersportsKneeProtectorsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsKneeProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsKneeProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsKneeProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
