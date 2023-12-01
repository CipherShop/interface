import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAviationEnginesComponent } from './other-aviation-engines.component';

describe('OtherAviationEnginesComponent', () => {
  let component: OtherAviationEnginesComponent;
  let fixture: ComponentFixture<OtherAviationEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherAviationEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherAviationEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
