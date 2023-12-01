import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetsAccessoriesComponent } from './motorcycle-powersports-helmets-accessories.component';

describe('MotorcyclePowersportsHelmetsAccessoriesComponent', () => {
  let component: MotorcyclePowersportsHelmetsAccessoriesComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
