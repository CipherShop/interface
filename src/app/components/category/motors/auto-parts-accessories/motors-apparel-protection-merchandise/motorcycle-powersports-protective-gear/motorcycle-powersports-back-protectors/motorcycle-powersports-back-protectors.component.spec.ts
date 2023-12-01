import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsBackProtectorsComponent } from './motorcycle-powersports-back-protectors.component';

describe('MotorcyclePowersportsBackProtectorsComponent', () => {
  let component: MotorcyclePowersportsBackProtectorsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsBackProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsBackProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsBackProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
