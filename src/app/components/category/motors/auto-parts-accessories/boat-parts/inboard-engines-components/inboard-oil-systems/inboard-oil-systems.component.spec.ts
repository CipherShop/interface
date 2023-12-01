import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardOilSystemsComponent } from './inboard-oil-systems.component';

describe('InboardOilSystemsComponent', () => {
  let component: InboardOilSystemsComponent;
  let fixture: ComponentFixture<InboardOilSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardOilSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardOilSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
