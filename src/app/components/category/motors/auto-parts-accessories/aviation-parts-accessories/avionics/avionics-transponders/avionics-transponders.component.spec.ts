import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsTranspondersComponent } from './avionics-transponders.component';

describe('AvionicsTranspondersComponent', () => {
  let component: AvionicsTranspondersComponent;
  let fixture: ComponentFixture<AvionicsTranspondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsTranspondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsTranspondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
