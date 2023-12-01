import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingRiggingFittingsComponent } from './sailing-rigging-fittings.component';

describe('SailingRiggingFittingsComponent', () => {
  let component: SailingRiggingFittingsComponent;
  let fixture: ComponentFixture<SailingRiggingFittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailingRiggingFittingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailingRiggingFittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
