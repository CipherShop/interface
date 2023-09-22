import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVRelaysContactorsComponent } from './electric-atv-sx-s-utv-relays-contactors.component';

describe('ElectricATVSxSUTVRelaysContactorsComponent', () => {
  let component: ElectricATVSxSUTVRelaysContactorsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVRelaysContactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVRelaysContactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVRelaysContactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
