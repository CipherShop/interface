import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardAnodesComponent } from './outboard-anodes.component';

describe('OutboardAnodesComponent', () => {
  let component: OutboardAnodesComponent;
  let fixture: ComponentFixture<OutboardAnodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardAnodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardAnodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
