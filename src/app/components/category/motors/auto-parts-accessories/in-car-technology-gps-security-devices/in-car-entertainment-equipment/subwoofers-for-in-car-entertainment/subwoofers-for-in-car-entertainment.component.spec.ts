import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwoofersForInCarEntertainmentComponent } from './subwoofers-for-in-car-entertainment.component';

describe('SubwoofersForInCarEntertainmentComponent', () => {
  let component: SubwoofersForInCarEntertainmentComponent;
  let fixture: ComponentFixture<SubwoofersForInCarEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubwoofersForInCarEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubwoofersForInCarEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
