import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsBootShoePartsSparesComponent } from './motorcycle-powersports-boot-shoe-parts-spares.component';

describe('MotorcyclePowersportsBootShoePartsSparesComponent', () => {
  let component: MotorcyclePowersportsBootShoePartsSparesComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsBootShoePartsSparesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsBootShoePartsSparesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsBootShoePartsSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
