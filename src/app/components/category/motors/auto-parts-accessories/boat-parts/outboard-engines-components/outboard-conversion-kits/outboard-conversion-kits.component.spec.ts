import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardConversionKitsComponent } from './outboard-conversion-kits.component';

describe('OutboardConversionKitsComponent', () => {
  let component: OutboardConversionKitsComponent;
  let fixture: ComponentFixture<OutboardConversionKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardConversionKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardConversionKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
