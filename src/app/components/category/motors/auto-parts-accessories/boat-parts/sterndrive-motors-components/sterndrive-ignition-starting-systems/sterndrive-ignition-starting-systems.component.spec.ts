import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveIgnitionStartingSystemsComponent } from './sterndrive-ignition-starting-systems.component';

describe('SterndriveIgnitionStartingSystemsComponent', () => {
  let component: SterndriveIgnitionStartingSystemsComponent;
  let fixture: ComponentFixture<SterndriveIgnitionStartingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveIgnitionStartingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveIgnitionStartingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
