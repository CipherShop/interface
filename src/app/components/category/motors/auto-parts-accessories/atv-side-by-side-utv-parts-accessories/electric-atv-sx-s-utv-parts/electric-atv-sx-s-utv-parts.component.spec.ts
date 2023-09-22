import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVPartsComponent } from './electric-atv-sx-s-utv-parts.component';

describe('ElectricATVSxSUTVPartsComponent', () => {
  let component: ElectricATVSxSUTVPartsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
