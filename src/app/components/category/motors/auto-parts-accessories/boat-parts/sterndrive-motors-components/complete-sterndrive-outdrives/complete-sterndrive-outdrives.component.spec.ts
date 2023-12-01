import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSterndriveOutdrivesComponent } from './complete-sterndrive-outdrives.component';

describe('CompleteSterndriveOutdrivesComponent', () => {
  let component: CompleteSterndriveOutdrivesComponent;
  let fixture: ComponentFixture<CompleteSterndriveOutdrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSterndriveOutdrivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteSterndriveOutdrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
