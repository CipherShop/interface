import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardBeltsPulleysComponent } from './inboard-belts-pulleys.component';

describe('InboardBeltsPulleysComponent', () => {
  let component: InboardBeltsPulleysComponent;
  let fixture: ComponentFixture<InboardBeltsPulleysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardBeltsPulleysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardBeltsPulleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
