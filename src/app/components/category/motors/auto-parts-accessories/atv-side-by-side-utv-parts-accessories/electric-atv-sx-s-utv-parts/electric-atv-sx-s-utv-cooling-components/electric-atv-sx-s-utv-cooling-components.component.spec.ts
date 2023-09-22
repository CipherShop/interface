import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVCoolingComponentsComponent } from './electric-atv-sx-s-utv-cooling-components.component';

describe('ElectricATVSxSUTVCoolingComponentsComponent', () => {
  let component: ElectricATVSxSUTVCoolingComponentsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVCoolingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVCoolingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVCoolingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
