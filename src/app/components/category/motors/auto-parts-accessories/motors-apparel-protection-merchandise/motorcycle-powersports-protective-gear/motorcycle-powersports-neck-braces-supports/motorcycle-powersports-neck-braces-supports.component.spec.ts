import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsNeckBracesSupportsComponent } from './motorcycle-powersports-neck-braces-supports.component';

describe('MotorcyclePowersportsNeckBracesSupportsComponent', () => {
  let component: MotorcyclePowersportsNeckBracesSupportsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsNeckBracesSupportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsNeckBracesSupportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsNeckBracesSupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
