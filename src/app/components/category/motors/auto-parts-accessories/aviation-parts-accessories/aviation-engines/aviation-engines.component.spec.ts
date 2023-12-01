import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationEnginesComponent } from './aviation-engines.component';

describe('AviationEnginesComponent', () => {
  let component: AviationEnginesComponent;
  let fixture: ComponentFixture<AviationEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
