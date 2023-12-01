import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveMountingBracketsComponent } from './sterndrive-mounting-brackets.component';

describe('SterndriveMountingBracketsComponent', () => {
  let component: SterndriveMountingBracketsComponent;
  let fixture: ComponentFixture<SterndriveMountingBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveMountingBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveMountingBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
