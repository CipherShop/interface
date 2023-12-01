import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboardIntakeFuelSystemsComponent } from './inboard-intake-fuel-systems.component';

describe('InboardIntakeFuelSystemsComponent', () => {
  let component: InboardIntakeFuelSystemsComponent;
  let fixture: ComponentFixture<InboardIntakeFuelSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboardIntakeFuelSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboardIntakeFuelSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
