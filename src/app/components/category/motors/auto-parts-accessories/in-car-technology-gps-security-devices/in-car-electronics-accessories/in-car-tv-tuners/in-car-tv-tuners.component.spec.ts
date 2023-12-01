import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarTVTunersComponent } from './in-car-tv-tuners.component';

describe('InCarTVTunersComponent', () => {
  let component: InCarTVTunersComponent;
  let fixture: ComponentFixture<InCarTVTunersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarTVTunersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarTVTunersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
