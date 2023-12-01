import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAviationEnginesComponent } from './complete-aviation-engines.component';

describe('CompleteAviationEnginesComponent', () => {
  let component: CompleteAviationEnginesComponent;
  let fixture: ComponentFixture<CompleteAviationEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteAviationEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteAviationEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
