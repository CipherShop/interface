import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatPlumbingVentilationComponent } from './boat-plumbing-ventilation.component';

describe('BoatPlumbingVentilationComponent', () => {
  let component: BoatPlumbingVentilationComponent;
  let fixture: ComponentFixture<BoatPlumbingVentilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatPlumbingVentilationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatPlumbingVentilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
