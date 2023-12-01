import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardEnginesComponentsComponent } from './inboard-engines-components.component';

describe('InboardEnginesComponentsComponent', () => {
  let component: InboardEnginesComponentsComponent;
  let fixture: ComponentFixture<InboardEnginesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardEnginesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardEnginesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
