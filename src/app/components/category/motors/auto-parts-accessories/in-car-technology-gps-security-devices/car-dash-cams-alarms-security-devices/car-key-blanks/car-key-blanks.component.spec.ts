import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarKeyBlanksComponent } from './car-key-blanks.component';

describe('CarKeyBlanksComponent', () => {
  let component: CarKeyBlanksComponent;
  let fixture: ComponentFixture<CarKeyBlanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarKeyBlanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarKeyBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
