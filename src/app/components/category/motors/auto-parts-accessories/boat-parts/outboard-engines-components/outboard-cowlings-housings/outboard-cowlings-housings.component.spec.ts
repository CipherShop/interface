import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardCowlingsHousingsComponent } from './outboard-cowlings-housings.component';

describe('OutboardCowlingsHousingsComponent', () => {
  let component: OutboardCowlingsHousingsComponent;
  let fixture: ComponentFixture<OutboardCowlingsHousingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardCowlingsHousingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardCowlingsHousingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
