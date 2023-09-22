import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVCoolingPlatesComponent } from './electric-atv-sx-s-utv-cooling-plates.component';

describe('ElectricATVSxSUTVCoolingPlatesComponent', () => {
  let component: ElectricATVSxSUTVCoolingPlatesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVCoolingPlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVCoolingPlatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVCoolingPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
