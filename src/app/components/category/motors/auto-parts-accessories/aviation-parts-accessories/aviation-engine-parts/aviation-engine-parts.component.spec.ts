import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationEnginePartsComponent } from './aviation-engine-parts.component';

describe('AviationEnginePartsComponent', () => {
  let component: AviationEnginePartsComponent;
  let fixture: ComponentFixture<AviationEnginePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationEnginePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationEnginePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
