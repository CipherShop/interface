import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorsComponent } from './motors.component';

describe('MotorsComponent', () => {
  let component: MotorsComponent;
  let fixture: ComponentFixture<MotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
