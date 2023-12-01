import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatAnchoringDockingComponent } from './boat-anchoring-docking.component';

describe('BoatAnchoringDockingComponent', () => {
  let component: BoatAnchoringDockingComponent;
  let fixture: ComponentFixture<BoatAnchoringDockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatAnchoringDockingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatAnchoringDockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
