import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveInternalEnginePartsComponent } from './sterndrive-internal-engine-parts.component';

describe('SterndriveInternalEnginePartsComponent', () => {
  let component: SterndriveInternalEnginePartsComponent;
  let fixture: ComponentFixture<SterndriveInternalEnginePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveInternalEnginePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveInternalEnginePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
