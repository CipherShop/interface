import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMotorcyclePowersportsHeadwearComponent } from './other-motorcycle-powersports-headwear.component';

describe('OtherMotorcyclePowersportsHeadwearComponent', () => {
  let component: OtherMotorcyclePowersportsHeadwearComponent;
  let fixture: ComponentFixture<OtherMotorcyclePowersportsHeadwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherMotorcyclePowersportsHeadwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherMotorcyclePowersportsHeadwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
