import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleBucklesBeltsComponent } from './motorcycle-buckles-belts.component';

describe('MotorcycleBucklesBeltsComponent', () => {
  let component: MotorcycleBucklesBeltsComponent;
  let fixture: ComponentFixture<MotorcycleBucklesBeltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleBucklesBeltsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleBucklesBeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
