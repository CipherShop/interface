import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVStorageRacksComponent } from './other-atv-side-by-side-utv-storage-racks.component';

describe('OtherATVSideBySideUTVStorageRacksComponent', () => {
  let component: OtherATVSideBySideUTVStorageRacksComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVStorageRacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVStorageRacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVStorageRacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
