import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowmobileJacketsBibsComponent } from './snowmobile-jackets-bibs.component';

describe('SnowmobileJacketsBibsComponent', () => {
  let component: SnowmobileJacketsBibsComponent;
  let fixture: ComponentFixture<SnowmobileJacketsBibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowmobileJacketsBibsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowmobileJacketsBibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
