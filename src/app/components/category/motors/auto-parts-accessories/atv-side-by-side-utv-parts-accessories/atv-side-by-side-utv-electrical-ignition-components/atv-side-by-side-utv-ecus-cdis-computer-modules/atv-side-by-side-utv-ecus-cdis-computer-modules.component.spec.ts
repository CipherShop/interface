import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVECUsCDIsComputerModulesComponent } from './atv-side-by-side-utv-ecus-cdis-computer-modules.component';

describe('ATVSideBySideUTVECUsCDIsComputerModulesComponent', () => {
  let component: ATVSideBySideUTVECUsCDIsComputerModulesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVECUsCDIsComputerModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVECUsCDIsComputerModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVECUsCDIsComputerModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
