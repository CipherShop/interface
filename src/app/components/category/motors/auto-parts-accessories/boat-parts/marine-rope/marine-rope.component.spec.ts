import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineRopeComponent } from './marine-rope.component';

describe('MarineRopeComponent', () => {
  let component: MarineRopeComponent;
  let fixture: ComponentFixture<MarineRopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarineRopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineRopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
