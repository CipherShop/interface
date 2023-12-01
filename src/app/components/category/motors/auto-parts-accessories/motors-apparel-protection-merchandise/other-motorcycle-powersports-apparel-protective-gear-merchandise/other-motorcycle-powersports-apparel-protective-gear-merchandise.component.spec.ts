import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMotorcyclePowersportsApparelProtectiveGearMerchandiseComponent } from './other-motorcycle-powersports-apparel-protective-gear-merchandise.component';

describe('OtherMotorcyclePowersportsApparelProtectiveGearMerchandiseComponent', () => {
  let component: OtherMotorcyclePowersportsApparelProtectiveGearMerchandiseComponent;
  let fixture: ComponentFixture<OtherMotorcyclePowersportsApparelProtectiveGearMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherMotorcyclePowersportsApparelProtectiveGearMerchandiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherMotorcyclePowersportsApparelProtectiveGearMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
