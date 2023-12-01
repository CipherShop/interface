import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardIntakeFuelSystemsComponent } from './outboard-intake-fuel-systems.component';

describe('OutboardIntakeFuelSystemsComponent', () => {
  let component: OutboardIntakeFuelSystemsComponent;
  let fixture: ComponentFixture<OutboardIntakeFuelSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardIntakeFuelSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardIntakeFuelSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
