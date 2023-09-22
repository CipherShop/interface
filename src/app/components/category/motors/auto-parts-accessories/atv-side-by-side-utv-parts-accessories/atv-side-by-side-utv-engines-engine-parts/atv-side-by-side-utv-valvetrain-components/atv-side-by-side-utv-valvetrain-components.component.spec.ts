import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVValvetrainComponentsComponent } from './atv-side-by-side-utv-valvetrain-components.component';

describe('ATVSideBySideUTVValvetrainComponentsComponent', () => {
  let component: ATVSideBySideUTVValvetrainComponentsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVValvetrainComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVValvetrainComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVValvetrainComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
