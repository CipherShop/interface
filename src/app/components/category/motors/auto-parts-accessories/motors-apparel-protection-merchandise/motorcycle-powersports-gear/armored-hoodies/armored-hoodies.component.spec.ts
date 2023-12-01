import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoredHoodiesComponent } from './armored-hoodies.component';

describe('ArmoredHoodiesComponent', () => {
  let component: ArmoredHoodiesComponent;
  let fixture: ComponentFixture<ArmoredHoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmoredHoodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmoredHoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
