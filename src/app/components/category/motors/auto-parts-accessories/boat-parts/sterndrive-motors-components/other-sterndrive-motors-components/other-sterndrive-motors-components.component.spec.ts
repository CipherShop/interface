import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSterndriveMotorsComponentsComponent } from './other-sterndrive-motors-components.component';

describe('OtherSterndriveMotorsComponentsComponent', () => {
  let component: OtherSterndriveMotorsComponentsComponent;
  let fixture: ComponentFixture<OtherSterndriveMotorsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSterndriveMotorsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSterndriveMotorsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
