import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOutboardPowerheadsComponent } from './complete-outboard-powerheads.component';

describe('CompleteOutboardPowerheadsComponent', () => {
  let component: CompleteOutboardPowerheadsComponent;
  let fixture: ComponentFixture<CompleteOutboardPowerheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteOutboardPowerheadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteOutboardPowerheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
