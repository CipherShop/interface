import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetPartsComponent } from './motorcycle-powersports-helmet-parts.component';

describe('MotorcyclePowersportsHelmetPartsComponent', () => {
  let component: MotorcyclePowersportsHelmetPartsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
