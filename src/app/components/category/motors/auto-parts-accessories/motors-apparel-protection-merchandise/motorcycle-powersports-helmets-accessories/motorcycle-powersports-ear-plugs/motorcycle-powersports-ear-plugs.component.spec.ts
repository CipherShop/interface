import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsEarPlugsComponent } from './motorcycle-powersports-ear-plugs.component';

describe('MotorcyclePowersportsEarPlugsComponent', () => {
  let component: MotorcyclePowersportsEarPlugsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsEarPlugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsEarPlugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsEarPlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
