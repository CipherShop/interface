import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleOverBootsComponent } from './motorcycle-over-boots.component';

describe('MotorcycleOverBootsComponent', () => {
  let component: MotorcycleOverBootsComponent;
  let fixture: ComponentFixture<MotorcycleOverBootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleOverBootsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleOverBootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
