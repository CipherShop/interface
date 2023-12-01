import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInboardEnginesComponentsComponent } from './other-inboard-engines-components.component';

describe('OtherInboardEnginesComponentsComponent', () => {
  let component: OtherInboardEnginesComponentsComponent;
  let fixture: ComponentFixture<OtherInboardEnginesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInboardEnginesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInboardEnginesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
