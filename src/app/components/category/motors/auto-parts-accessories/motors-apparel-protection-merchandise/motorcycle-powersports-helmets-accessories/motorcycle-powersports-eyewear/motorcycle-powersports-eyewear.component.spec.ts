import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsEyewearComponent } from './motorcycle-powersports-eyewear.component';

describe('MotorcyclePowersportsEyewearComponent', () => {
  let component: MotorcyclePowersportsEyewearComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsEyewearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsEyewearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsEyewearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
