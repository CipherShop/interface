import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePantsChapsComponent } from './motorcycle-pants-chaps.component';

describe('MotorcyclePantsChapsComponent', () => {
  let component: MotorcyclePantsChapsComponent;
  let fixture: ComponentFixture<MotorcyclePantsChapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePantsChapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePantsChapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
