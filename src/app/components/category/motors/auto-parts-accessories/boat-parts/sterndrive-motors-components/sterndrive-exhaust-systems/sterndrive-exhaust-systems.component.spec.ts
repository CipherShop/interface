import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveExhaustSystemsComponent } from './sterndrive-exhaust-systems.component';

describe('SterndriveExhaustSystemsComponent', () => {
  let component: SterndriveExhaustSystemsComponent;
  let fixture: ComponentFixture<SterndriveExhaustSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveExhaustSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveExhaustSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
