import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetVisorsComponent } from './motorcycle-powersports-helmet-visors.component';

describe('MotorcyclePowersportsHelmetVisorsComponent', () => {
  let component: MotorcyclePowersportsHelmetVisorsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetVisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetVisorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetVisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
