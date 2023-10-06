import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVSteeringSuspensionPartsComponent } from './other-atv-side-by-side-utv-steering-suspension-parts.component';

describe('OtherATVSideBySideUTVSteeringSuspensionPartsComponent', () => {
  let component: OtherATVSideBySideUTVSteeringSuspensionPartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVSteeringSuspensionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVSteeringSuspensionPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVSteeringSuspensionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
