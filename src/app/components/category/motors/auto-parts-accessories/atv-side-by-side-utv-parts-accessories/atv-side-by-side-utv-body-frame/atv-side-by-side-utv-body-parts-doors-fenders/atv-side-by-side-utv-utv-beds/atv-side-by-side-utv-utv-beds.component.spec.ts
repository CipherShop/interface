import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVUTVBedsComponent } from './atv-side-by-side-utv-utv-beds.component';

describe('ATVSideBySideUTVUTVBedsComponent', () => {
  let component: ATVSideBySideUTVUTVBedsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVUTVBedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVUTVBedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVUTVBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
