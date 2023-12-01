import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrimRemovalToolsComponent } from './car-trim-removal-tools.component';

describe('CarTrimRemovalToolsComponent', () => {
  let component: CarTrimRemovalToolsComponent;
  let fixture: ComponentFixture<CarTrimRemovalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTrimRemovalToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTrimRemovalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
