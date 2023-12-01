import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintageCarRadiosComponent } from './vintage-car-radios.component';

describe('VintageCarRadiosComponent', () => {
  let component: VintageCarRadiosComponent;
  let fixture: ComponentFixture<VintageCarRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VintageCarRadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VintageCarRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
