import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInCarElectronicAccessoriesComponent } from './other-in-car-electronic-accessories.component';

describe('OtherInCarElectronicAccessoriesComponent', () => {
  let component: OtherInCarElectronicAccessoriesComponent;
  let fixture: ComponentFixture<OtherInCarElectronicAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInCarElectronicAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInCarElectronicAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
