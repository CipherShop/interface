import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsChestProtectorsComponent } from './motorcycle-powersports-chest-protectors.component';

describe('MotorcyclePowersportsChestProtectorsComponent', () => {
  let component: MotorcyclePowersportsChestProtectorsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsChestProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsChestProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsChestProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
