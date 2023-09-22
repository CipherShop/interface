import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEnginePipesHosesComponent } from './atv-side-by-side-utv-engine-pipes-hoses.component';

describe('ATVSideBySideUTVEnginePipesHosesComponent', () => {
  let component: ATVSideBySideUTVEnginePipesHosesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEnginePipesHosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEnginePipesHosesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEnginePipesHosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
