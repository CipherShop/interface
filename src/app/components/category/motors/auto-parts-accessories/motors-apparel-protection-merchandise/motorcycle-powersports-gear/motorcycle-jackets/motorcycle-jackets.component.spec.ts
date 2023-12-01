import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleJacketsComponent } from './motorcycle-jackets.component';

describe('MotorcycleJacketsComponent', () => {
  let component: MotorcycleJacketsComponent;
  let fixture: ComponentFixture<MotorcycleJacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleJacketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleJacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
