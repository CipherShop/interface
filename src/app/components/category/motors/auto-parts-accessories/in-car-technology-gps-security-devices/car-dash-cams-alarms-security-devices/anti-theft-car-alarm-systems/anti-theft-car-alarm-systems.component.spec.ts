import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiTheftCarAlarmSystemsComponent } from './anti-theft-car-alarm-systems.component';

describe('AntiTheftCarAlarmSystemsComponent', () => {
  let component: AntiTheftCarAlarmSystemsComponent;
  let fixture: ComponentFixture<AntiTheftCarAlarmSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiTheftCarAlarmSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiTheftCarAlarmSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
