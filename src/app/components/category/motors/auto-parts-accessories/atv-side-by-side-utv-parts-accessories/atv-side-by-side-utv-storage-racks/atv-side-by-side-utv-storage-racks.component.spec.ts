import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVStorageRacksComponent } from './atv-side-by-side-utv-storage-racks.component';

describe('ATVSideBySideUTVStorageRacksComponent', () => {
  let component: ATVSideBySideUTVStorageRacksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVStorageRacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVStorageRacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVStorageRacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
