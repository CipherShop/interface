import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingToolsRepairComponent } from './sailing-tools-repair.component';

describe('SailingToolsRepairComponent', () => {
  let component: SailingToolsRepairComponent;
  let fixture: ComponentFixture<SailingToolsRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailingToolsRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailingToolsRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
