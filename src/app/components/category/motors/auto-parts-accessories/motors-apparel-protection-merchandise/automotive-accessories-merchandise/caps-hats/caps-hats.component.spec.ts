import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsHatsComponent } from './caps-hats.component';

describe('CapsHatsComponent', () => {
  let component: CapsHatsComponent;
  let fixture: ComponentFixture<CapsHatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsHatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
