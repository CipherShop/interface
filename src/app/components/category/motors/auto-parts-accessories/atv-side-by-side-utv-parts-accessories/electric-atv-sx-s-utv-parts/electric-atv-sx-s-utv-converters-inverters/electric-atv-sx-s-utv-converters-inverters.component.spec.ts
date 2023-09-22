import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVConvertersInvertersComponent } from './electric-atv-sx-s-utv-converters-inverters.component';

describe('ElectricATVSxSUTVConvertersInvertersComponent', () => {
  let component: ElectricATVSxSUTVConvertersInvertersComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVConvertersInvertersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVConvertersInvertersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVConvertersInvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
