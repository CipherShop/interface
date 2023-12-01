import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAvionicsComponent } from './other-avionics.component';

describe('OtherAvionicsComponent', () => {
  let component: OtherAvionicsComponent;
  let fixture: ComponentFixture<OtherAvionicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherAvionicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherAvionicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
