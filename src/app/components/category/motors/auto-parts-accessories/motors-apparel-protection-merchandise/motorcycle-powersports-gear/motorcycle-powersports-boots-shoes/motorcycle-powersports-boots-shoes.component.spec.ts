import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsBootsShoesComponent } from './motorcycle-powersports-boots-shoes.component';

describe('MotorcyclePowersportsBootsShoesComponent', () => {
  let component: MotorcyclePowersportsBootsShoesComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsBootsShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsBootsShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsBootsShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
