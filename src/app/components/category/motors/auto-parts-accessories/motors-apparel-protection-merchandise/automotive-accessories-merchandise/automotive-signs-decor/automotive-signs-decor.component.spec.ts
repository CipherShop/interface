import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveSignsDecorComponent } from './automotive-signs-decor.component';

describe('AutomotiveSignsDecorComponent', () => {
  let component: AutomotiveSignsDecorComponent;
  let fixture: ComponentFixture<AutomotiveSignsDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveSignsDecorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveSignsDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
