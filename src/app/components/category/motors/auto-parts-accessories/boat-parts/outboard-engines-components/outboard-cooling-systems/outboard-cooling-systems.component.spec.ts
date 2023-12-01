import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardCoolingSystemsComponent } from './outboard-cooling-systems.component';

describe('OutboardCoolingSystemsComponent', () => {
  let component: OutboardCoolingSystemsComponent;
  let fixture: ComponentFixture<OutboardCoolingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardCoolingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardCoolingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
