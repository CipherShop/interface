import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatRadioCommunicationsComponent } from './boat-radio-communications.component';

describe('BoatRadioCommunicationsComponent', () => {
  let component: BoatRadioCommunicationsComponent;
  let fixture: ComponentFixture<BoatRadioCommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatRadioCommunicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatRadioCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
