import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsGPSComponent } from './avionics-gps.component';

describe('AvionicsGPSComponent', () => {
  let component: AvionicsGPSComponent;
  let fixture: ComponentFixture<AvionicsGPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsGPSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsGPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
