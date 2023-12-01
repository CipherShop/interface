import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocrossKitsComponent } from './motocross-kits.component';

describe('MotocrossKitsComponent', () => {
  let component: MotocrossKitsComponent;
  let fixture: ComponentFixture<MotocrossKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotocrossKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotocrossKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
