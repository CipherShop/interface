import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardEnginesComponentsComponent } from './outboard-engines-components.component';

describe('OutboardEnginesComponentsComponent', () => {
  let component: OutboardEnginesComponentsComponent;
  let fixture: ComponentFixture<OutboardEnginesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardEnginesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardEnginesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
