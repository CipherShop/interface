import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsProtectorJacketsVestsComponent } from './motorcycle-powersports-protector-jackets-vests.component';

describe('MotorcyclePowersportsProtectorJacketsVestsComponent', () => {
  let component: MotorcyclePowersportsProtectorJacketsVestsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsProtectorJacketsVestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsProtectorJacketsVestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsProtectorJacketsVestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
