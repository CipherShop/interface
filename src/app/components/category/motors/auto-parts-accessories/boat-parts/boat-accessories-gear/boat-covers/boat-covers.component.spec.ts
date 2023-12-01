import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCoversComponent } from './boat-covers.component';

describe('BoatCoversComponent', () => {
  let component: BoatCoversComponent;
  let fixture: ComponentFixture<BoatCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
