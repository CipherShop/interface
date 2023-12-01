import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveIntakeFuelSystemsComponent } from './sterndrive-intake-fuel-systems.component';

describe('SterndriveIntakeFuelSystemsComponent', () => {
  let component: SterndriveIntakeFuelSystemsComponent;
  let fixture: ComponentFixture<SterndriveIntakeFuelSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveIntakeFuelSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveIntakeFuelSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
