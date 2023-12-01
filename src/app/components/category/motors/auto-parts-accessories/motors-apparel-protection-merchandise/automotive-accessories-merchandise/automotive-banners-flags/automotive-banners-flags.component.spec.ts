import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveBannersFlagsComponent } from './automotive-banners-flags.component';

describe('AutomotiveBannersFlagsComponent', () => {
  let component: AutomotiveBannersFlagsComponent;
  let fixture: ComponentFixture<AutomotiveBannersFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveBannersFlagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveBannersFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
