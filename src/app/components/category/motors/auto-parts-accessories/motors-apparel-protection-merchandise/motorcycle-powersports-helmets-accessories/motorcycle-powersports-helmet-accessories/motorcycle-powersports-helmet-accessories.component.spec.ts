import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetAccessoriesComponent } from './motorcycle-powersports-helmet-accessories.component';

describe('MotorcyclePowersportsHelmetAccessoriesComponent', () => {
  let component: MotorcyclePowersportsHelmetAccessoriesComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
