import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsComponent } from './avionics.component';

describe('AvionicsComponent', () => {
  let component: AvionicsComponent;
  let fixture: ComponentFixture<AvionicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
