import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTrollingMotorsComponent } from './complete-trolling-motors.component';

describe('CompleteTrollingMotorsComponent', () => {
  let component: CompleteTrollingMotorsComponent;
  let fixture: ComponentFixture<CompleteTrollingMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteTrollingMotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteTrollingMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
