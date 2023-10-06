import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVUTVCoversComponent } from './atv-utv-covers.component';

describe('ATVUTVCoversComponent', () => {
  let component: ATVUTVCoversComponent;
  let fixture: ComponentFixture<ATVUTVCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVUTVCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVUTVCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
