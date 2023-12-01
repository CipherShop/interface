import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrollingMotorsComponentsComponent } from './trolling-motors-components.component';

describe('TrollingMotorsComponentsComponent', () => {
  let component: TrollingMotorsComponentsComponent;
  let fixture: ComponentFixture<TrollingMotorsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrollingMotorsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrollingMotorsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
