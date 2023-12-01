import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsIndicatorsComponent } from './avionics-indicators.component';

describe('AvionicsIndicatorsComponent', () => {
  let component: AvionicsIndicatorsComponent;
  let fixture: ComponentFixture<AvionicsIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
