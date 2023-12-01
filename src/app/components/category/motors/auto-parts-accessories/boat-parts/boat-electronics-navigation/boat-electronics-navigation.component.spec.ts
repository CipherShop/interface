import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatElectronicsNavigationComponent } from './boat-electronics-navigation.component';

describe('BoatElectronicsNavigationComponent', () => {
  let component: BoatElectronicsNavigationComponent;
  let fixture: ComponentFixture<BoatElectronicsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatElectronicsNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatElectronicsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
