import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetVisorInsertsComponent } from './motorcycle-powersports-helmet-visor-inserts.component';

describe('MotorcyclePowersportsHelmetVisorInsertsComponent', () => {
  let component: MotorcyclePowersportsHelmetVisorInsertsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetVisorInsertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetVisorInsertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetVisorInsertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
