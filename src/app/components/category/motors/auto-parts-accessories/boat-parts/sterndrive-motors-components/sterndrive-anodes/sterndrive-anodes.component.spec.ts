import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveAnodesComponent } from './sterndrive-anodes.component';

describe('SterndriveAnodesComponent', () => {
  let component: SterndriveAnodesComponent;
  let fixture: ComponentFixture<SterndriveAnodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveAnodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveAnodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
