import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailsComponent } from './sails.component';

describe('SailsComponent', () => {
  let component: SailsComponent;
  let fixture: ComponentFixture<SailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
