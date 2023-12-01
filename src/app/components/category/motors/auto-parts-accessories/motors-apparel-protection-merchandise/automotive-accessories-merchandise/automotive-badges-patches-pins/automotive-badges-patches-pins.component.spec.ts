import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveBadgesPatchesPinsComponent } from './automotive-badges-patches-pins.component';

describe('AutomotiveBadgesPatchesPinsComponent', () => {
  let component: AutomotiveBadgesPatchesPinsComponent;
  let fixture: ComponentFixture<AutomotiveBadgesPatchesPinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveBadgesPatchesPinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveBadgesPatchesPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
