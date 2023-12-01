import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFindersDepthFindersComponent } from './fish-finders-depth-finders.component';

describe('FishFindersDepthFindersComponent', () => {
  let component: FishFindersDepthFindersComponent;
  let fixture: ComponentFixture<FishFindersDepthFindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFindersDepthFindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishFindersDepthFindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
