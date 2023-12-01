import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardEngineRiggingComponent } from './outboard-engine-rigging.component';

describe('OutboardEngineRiggingComponent', () => {
  let component: OutboardEngineRiggingComponent;
  let fixture: ComponentFixture<OutboardEngineRiggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardEngineRiggingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardEngineRiggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
