import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardPowerheadComponentsComponent } from './outboard-powerhead-components.component';

describe('OutboardPowerheadComponentsComponent', () => {
  let component: OutboardPowerheadComponentsComponent;
  let fixture: ComponentFixture<OutboardPowerheadComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardPowerheadComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardPowerheadComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
