import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVControlModulesComponent } from './electric-atv-sx-s-utv-control-modules.component';

describe('ElectricATVSxSUTVControlModulesComponent', () => {
  let component: ElectricATVSxSUTVControlModulesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVControlModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVControlModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVControlModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
