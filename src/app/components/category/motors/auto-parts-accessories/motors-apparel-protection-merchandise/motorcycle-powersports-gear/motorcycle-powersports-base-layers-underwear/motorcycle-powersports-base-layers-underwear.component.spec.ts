import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsBaseLayersUnderwearComponent } from './motorcycle-powersports-base-layers-underwear.component';

describe('MotorcyclePowersportsBaseLayersUnderwearComponent', () => {
  let component: MotorcyclePowersportsBaseLayersUnderwearComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsBaseLayersUnderwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsBaseLayersUnderwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsBaseLayersUnderwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
