import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrollingMotorComponentsComponent } from './trolling-motor-components.component';

describe('TrollingMotorComponentsComponent', () => {
  let component: TrollingMotorComponentsComponent;
  let fixture: ComponentFixture<TrollingMotorComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrollingMotorComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrollingMotorComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
