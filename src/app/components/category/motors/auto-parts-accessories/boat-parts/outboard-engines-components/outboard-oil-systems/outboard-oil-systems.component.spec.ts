import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardOilSystemsComponent } from './outboard-oil-systems.component';

describe('OutboardOilSystemsComponent', () => {
  let component: OutboardOilSystemsComponent;
  let fixture: ComponentFixture<OutboardOilSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardOilSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardOilSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
