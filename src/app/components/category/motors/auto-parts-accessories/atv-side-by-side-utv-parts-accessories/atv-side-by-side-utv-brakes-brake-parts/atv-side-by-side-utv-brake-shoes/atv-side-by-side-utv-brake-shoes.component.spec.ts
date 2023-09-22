import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeShoesComponent } from './atv-side-by-side-utv-brake-shoes.component';

describe('ATVSideBySideUTVBrakeShoesComponent', () => {
  let component: ATVSideBySideUTVBrakeShoesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
