import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatMemorabiliaComponent } from './boat-memorabilia.component';

describe('BoatMemorabiliaComponent', () => {
  let component: BoatMemorabiliaComponent;
  let fixture: ComponentFixture<BoatMemorabiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatMemorabiliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatMemorabiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
