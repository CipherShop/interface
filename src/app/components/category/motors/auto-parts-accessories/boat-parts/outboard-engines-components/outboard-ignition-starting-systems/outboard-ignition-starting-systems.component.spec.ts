import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardIgnitionStartingSystemsComponent } from './outboard-ignition-starting-systems.component';

describe('OutboardIgnitionStartingSystemsComponent', () => {
  let component: OutboardIgnitionStartingSystemsComponent;
  let fixture: ComponentFixture<OutboardIgnitionStartingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardIgnitionStartingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardIgnitionStartingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
