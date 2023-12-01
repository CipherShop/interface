import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardLowerUnitComponentsComponent } from './outboard-lower-unit-components.component';

describe('OutboardLowerUnitComponentsComponent', () => {
  let component: OutboardLowerUnitComponentsComponent;
  let fixture: ComponentFixture<OutboardLowerUnitComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardLowerUnitComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardLowerUnitComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
