import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveOilSystemsComponent } from './sterndrive-oil-systems.component';

describe('SterndriveOilSystemsComponent', () => {
  let component: SterndriveOilSystemsComponent;
  let fixture: ComponentFixture<SterndriveOilSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveOilSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveOilSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
