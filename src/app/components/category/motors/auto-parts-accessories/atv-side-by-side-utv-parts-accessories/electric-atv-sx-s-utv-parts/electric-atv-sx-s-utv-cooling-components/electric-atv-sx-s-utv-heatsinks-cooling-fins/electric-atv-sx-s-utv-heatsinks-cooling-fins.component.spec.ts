import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVHeatsinksCoolingFinsComponent } from './electric-atv-sx-s-utv-heatsinks-cooling-fins.component';

describe('ElectricATVSxSUTVHeatsinksCoolingFinsComponent', () => {
  let component: ElectricATVSxSUTVHeatsinksCoolingFinsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVHeatsinksCoolingFinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVHeatsinksCoolingFinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVHeatsinksCoolingFinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
