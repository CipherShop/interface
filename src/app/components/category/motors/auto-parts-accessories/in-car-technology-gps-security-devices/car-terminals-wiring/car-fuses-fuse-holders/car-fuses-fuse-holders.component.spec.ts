import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFusesFuseHoldersComponent } from './car-fuses-fuse-holders.component';

describe('CarFusesFuseHoldersComponent', () => {
  let component: CarFusesFuseHoldersComponent;
  let fixture: ComponentFixture<CarFusesFuseHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFusesFuseHoldersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFusesFuseHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
