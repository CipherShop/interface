import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardExhaustSystemsComponent } from './outboard-exhaust-systems.component';

describe('OutboardExhaustSystemsComponent', () => {
  let component: OutboardExhaustSystemsComponent;
  let fixture: ComponentFixture<OutboardExhaustSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardExhaustSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardExhaustSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
