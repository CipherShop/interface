import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsProtectorSetsComponent } from './motorcycle-powersports-protector-sets.component';

describe('MotorcyclePowersportsProtectorSetsComponent', () => {
  let component: MotorcyclePowersportsProtectorSetsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsProtectorSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsProtectorSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsProtectorSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
