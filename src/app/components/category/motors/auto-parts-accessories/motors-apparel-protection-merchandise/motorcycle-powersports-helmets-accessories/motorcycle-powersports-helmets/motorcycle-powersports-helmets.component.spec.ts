import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetsComponent } from './motorcycle-powersports-helmets.component';

describe('MotorcyclePowersportsHelmetsComponent', () => {
  let component: MotorcyclePowersportsHelmetsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
