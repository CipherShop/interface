import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAirHosesLinesPipesComponent } from './atv-side-by-side-utv-air-hoses-lines-pipes.component';

describe('ATVSideBySideUTVAirHosesLinesPipesComponent', () => {
  let component: ATVSideBySideUTVAirHosesLinesPipesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAirHosesLinesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAirHosesLinesPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAirHosesLinesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
