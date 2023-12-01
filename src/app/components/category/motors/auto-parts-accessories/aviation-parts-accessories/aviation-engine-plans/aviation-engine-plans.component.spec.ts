import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationEnginePlansComponent } from './aviation-engine-plans.component';

describe('AviationEnginePlansComponent', () => {
  let component: AviationEnginePlansComponent;
  let fixture: ComponentFixture<AviationEnginePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationEnginePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationEnginePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
