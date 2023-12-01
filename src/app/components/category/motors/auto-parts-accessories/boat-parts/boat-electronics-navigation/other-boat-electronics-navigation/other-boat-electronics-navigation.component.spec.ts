import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBoatElectronicsNavigationComponent } from './other-boat-electronics-navigation.component';

describe('OtherBoatElectronicsNavigationComponent', () => {
  let component: OtherBoatElectronicsNavigationComponent;
  let fixture: ComponentFixture<OtherBoatElectronicsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBoatElectronicsNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherBoatElectronicsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
