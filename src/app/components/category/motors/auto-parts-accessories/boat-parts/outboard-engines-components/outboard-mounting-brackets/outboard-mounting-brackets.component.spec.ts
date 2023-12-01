import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardMountingBracketsComponent } from './outboard-mounting-brackets.component';

describe('OutboardMountingBracketsComponent', () => {
  let component: OutboardMountingBracketsComponent;
  let fixture: ComponentFixture<OutboardMountingBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardMountingBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardMountingBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
