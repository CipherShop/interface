import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineBatteriesComponent } from './marine-batteries.component';

describe('MarineBatteriesComponent', () => {
  let component: MarineBatteriesComponent;
  let fixture: ComponentFixture<MarineBatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarineBatteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineBatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
