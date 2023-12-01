import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsHandheldsComponent } from './avionics-handhelds.component';

describe('AvionicsHandheldsComponent', () => {
  let component: AvionicsHandheldsComponent;
  let fixture: ComponentFixture<AvionicsHandheldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsHandheldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsHandheldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
