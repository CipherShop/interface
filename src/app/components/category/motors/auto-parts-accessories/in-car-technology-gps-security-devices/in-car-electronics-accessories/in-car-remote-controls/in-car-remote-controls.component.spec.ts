import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarRemoteControlsComponent } from './in-car-remote-controls.component';

describe('InCarRemoteControlsComponent', () => {
  let component: InCarRemoteControlsComponent;
  let fixture: ComponentFixture<InCarRemoteControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarRemoteControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarRemoteControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
