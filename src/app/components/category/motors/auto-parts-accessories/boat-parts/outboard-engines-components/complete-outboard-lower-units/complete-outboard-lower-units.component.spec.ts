import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOutboardLowerUnitsComponent } from './complete-outboard-lower-units.component';

describe('CompleteOutboardLowerUnitsComponent', () => {
  let component: CompleteOutboardLowerUnitsComponent;
  let fixture: ComponentFixture<CompleteOutboardLowerUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteOutboardLowerUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteOutboardLowerUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
