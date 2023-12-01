import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsProtectorPartsComponent } from './motorcycle-powersports-protector-parts.component';

describe('MotorcyclePowersportsProtectorPartsComponent', () => {
  let component: MotorcyclePowersportsProtectorPartsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsProtectorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsProtectorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsProtectorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
