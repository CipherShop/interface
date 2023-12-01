import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHipProtectorsComponent } from './motorcycle-powersports-hip-protectors.component';

describe('MotorcyclePowersportsHipProtectorsComponent', () => {
  let component: MotorcyclePowersportsHipProtectorsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHipProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHipProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHipProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
