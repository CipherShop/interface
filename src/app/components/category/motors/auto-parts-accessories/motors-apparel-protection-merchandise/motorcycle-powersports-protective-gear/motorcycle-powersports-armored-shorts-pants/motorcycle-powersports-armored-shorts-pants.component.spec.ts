import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsArmoredShortsPantsComponent } from './motorcycle-powersports-armored-shorts-pants.component';

describe('MotorcyclePowersportsArmoredShortsPantsComponent', () => {
  let component: MotorcyclePowersportsArmoredShortsPantsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsArmoredShortsPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsArmoredShortsPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsArmoredShortsPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
