import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsArmoredShirtsComponent } from './motorcycle-powersports-armored-shirts.component';

describe('MotorcyclePowersportsArmoredShirtsComponent', () => {
  let component: MotorcyclePowersportsArmoredShirtsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsArmoredShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsArmoredShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsArmoredShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
