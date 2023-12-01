import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveConversionKitsComponent } from './sterndrive-conversion-kits.component';

describe('SterndriveConversionKitsComponent', () => {
  let component: SterndriveConversionKitsComponent;
  let fixture: ComponentFixture<SterndriveConversionKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveConversionKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveConversionKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
