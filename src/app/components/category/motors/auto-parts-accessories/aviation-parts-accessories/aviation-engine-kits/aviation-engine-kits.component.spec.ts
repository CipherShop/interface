import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationEngineKitsComponent } from './aviation-engine-kits.component';

describe('AviationEngineKitsComponent', () => {
  let component: AviationEngineKitsComponent;
  let fixture: ComponentFixture<AviationEngineKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationEngineKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationEngineKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
