import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingWinchesComponent } from './sailing-winches.component';

describe('SailingWinchesComponent', () => {
  let component: SailingWinchesComponent;
  let fixture: ComponentFixture<SailingWinchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailingWinchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailingWinchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
