import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardExhaustSystemsComponent } from './inboard-exhaust-systems.component';

describe('InboardExhaustSystemsComponent', () => {
  let component: InboardExhaustSystemsComponent;
  let fixture: ComponentFixture<InboardExhaustSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardExhaustSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardExhaustSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
