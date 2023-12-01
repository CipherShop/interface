import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardIgnitionStartingSystemsComponent } from './inboard-ignition-starting-systems.component';

describe('InboardIgnitionStartingSystemsComponent', () => {
  let component: InboardIgnitionStartingSystemsComponent;
  let fixture: ComponentFixture<InboardIgnitionStartingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardIgnitionStartingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardIgnitionStartingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
