import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsHelmetVisorBagsComponent } from './motorcycle-powersports-helmet-visor-bags.component';

describe('MotorcyclePowersportsHelmetVisorBagsComponent', () => {
  let component: MotorcyclePowersportsHelmetVisorBagsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsHelmetVisorBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsHelmetVisorBagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsHelmetVisorBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
