import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSterndriveEnginesComponent } from './complete-sterndrive-engines.component';

describe('CompleteSterndriveEnginesComponent', () => {
  let component: CompleteSterndriveEnginesComponent;
  let fixture: ComponentFixture<CompleteSterndriveEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSterndriveEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteSterndriveEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
