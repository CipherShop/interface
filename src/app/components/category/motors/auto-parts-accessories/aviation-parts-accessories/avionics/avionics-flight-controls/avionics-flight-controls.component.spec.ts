import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsFlightControlsComponent } from './avionics-flight-controls.component';

describe('AvionicsFlightControlsComponent', () => {
  let component: AvionicsFlightControlsComponent;
  let fixture: ComponentFixture<AvionicsFlightControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsFlightControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsFlightControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
