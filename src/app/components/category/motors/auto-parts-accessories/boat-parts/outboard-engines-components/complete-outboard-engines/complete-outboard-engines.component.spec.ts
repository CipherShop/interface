import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOutboardEnginesComponent } from './complete-outboard-engines.component';

describe('CompleteOutboardEnginesComponent', () => {
  let component: CompleteOutboardEnginesComponent;
  let fixture: ComponentFixture<CompleteOutboardEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteOutboardEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteOutboardEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
