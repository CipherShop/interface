import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVFansComponent } from './electric-atv-sx-s-utv-fans.component';

describe('ElectricATVSxSUTVFansComponent', () => {
  let component: ElectricATVSxSUTVFansComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVFansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVFansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
