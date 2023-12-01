import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationEngineComponentsComponent } from './aviation-engine-components.component';

describe('AviationEngineComponentsComponent', () => {
  let component: AviationEngineComponentsComponent;
  let fixture: ComponentFixture<AviationEngineComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationEngineComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationEngineComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
