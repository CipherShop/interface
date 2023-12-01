import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationMemorabiliaComponent } from './aviation-memorabilia.component';

describe('AviationMemorabiliaComponent', () => {
  let component: AviationMemorabiliaComponent;
  let fixture: ComponentFixture<AviationMemorabiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationMemorabiliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationMemorabiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
