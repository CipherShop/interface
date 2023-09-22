import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelHosesLinesPipesComponent } from './atv-side-by-side-utv-fuel-hoses-lines-pipes.component';

describe('ATVSideBySideUTVFuelHosesLinesPipesComponent', () => {
  let component: ATVSideBySideUTVFuelHosesLinesPipesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelHosesLinesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelHosesLinesPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelHosesLinesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
