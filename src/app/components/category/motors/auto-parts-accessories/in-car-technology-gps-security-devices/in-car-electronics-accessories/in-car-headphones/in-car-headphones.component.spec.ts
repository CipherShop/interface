import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarHeadphonesComponent } from './in-car-headphones.component';

describe('InCarHeadphonesComponent', () => {
  let component: InCarHeadphonesComponent;
  let fixture: ComponentFixture<InCarHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarHeadphonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
