import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOutboardEnginesComponentsComponent } from './other-outboard-engines-components.component';

describe('OtherOutboardEnginesComponentsComponent', () => {
  let component: OtherOutboardEnginesComponentsComponent;
  let fixture: ComponentFixture<OtherOutboardEnginesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherOutboardEnginesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherOutboardEnginesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
