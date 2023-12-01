import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarElectronicsAccessoriesComponent } from './in-car-electronics-accessories.component';

describe('InCarElectronicsAccessoriesComponent', () => {
  let component: InCarElectronicsAccessoriesComponent;
  let fixture: ComponentFixture<InCarElectronicsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarElectronicsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarElectronicsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
