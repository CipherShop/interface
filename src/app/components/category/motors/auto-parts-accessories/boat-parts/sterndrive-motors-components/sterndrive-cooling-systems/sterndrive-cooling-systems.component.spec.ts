import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveCoolingSystemsComponent } from './sterndrive-cooling-systems.component';

describe('SterndriveCoolingSystemsComponent', () => {
  let component: SterndriveCoolingSystemsComponent;
  let fixture: ComponentFixture<SterndriveCoolingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveCoolingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveCoolingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
