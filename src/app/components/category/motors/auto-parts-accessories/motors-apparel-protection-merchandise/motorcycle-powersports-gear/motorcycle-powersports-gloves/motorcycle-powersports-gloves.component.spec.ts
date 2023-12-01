import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsGlovesComponent } from './motorcycle-powersports-gloves.component';

describe('MotorcyclePowersportsGlovesComponent', () => {
  let component: MotorcyclePowersportsGlovesComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsGlovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsGlovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsGlovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
