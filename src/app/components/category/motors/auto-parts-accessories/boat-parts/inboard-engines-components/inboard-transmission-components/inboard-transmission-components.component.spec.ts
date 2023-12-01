import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardTransmissionComponentsComponent } from './inboard-transmission-components.component';

describe('InboardTransmissionComponentsComponent', () => {
  let component: InboardTransmissionComponentsComponent;
  let fixture: ComponentFixture<InboardTransmissionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardTransmissionComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardTransmissionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
