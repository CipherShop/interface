import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetCareCleaningComponent } from './motorcycle-powersports-helmet-care-cleaning.component';

describe('MotorcyclePowersportsHelmetCareCleaningComponent', () => {
  let component: MotorcyclePowersportsHelmetCareCleaningComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetCareCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetCareCleaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetCareCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
