import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsIntercomsComponent } from './avionics-intercoms.component';

describe('AvionicsIntercomsComponent', () => {
  let component: AvionicsIntercomsComponent;
  let fixture: ComponentFixture<AvionicsIntercomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsIntercomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsIntercomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
