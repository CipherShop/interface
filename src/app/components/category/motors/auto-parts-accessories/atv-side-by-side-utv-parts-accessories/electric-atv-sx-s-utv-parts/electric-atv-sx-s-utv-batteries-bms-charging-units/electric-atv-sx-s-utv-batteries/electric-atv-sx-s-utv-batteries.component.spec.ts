import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVBatteriesComponent } from './electric-atv-sx-s-utv-batteries.component';

describe('ElectricATVSxSUTVBatteriesComponent', () => {
  let component: ElectricATVSxSUTVBatteriesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVBatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVBatteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVBatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
