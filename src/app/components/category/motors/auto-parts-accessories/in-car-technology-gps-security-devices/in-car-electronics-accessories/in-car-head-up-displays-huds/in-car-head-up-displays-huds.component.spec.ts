import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarHeadUpDisplaysHUDsComponent } from './in-car-head-up-displays-huds.component';

describe('InCarHeadUpDisplaysHUDsComponent', () => {
  let component: InCarHeadUpDisplaysHUDsComponent;
  let fixture: ComponentFixture<InCarHeadUpDisplaysHUDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarHeadUpDisplaysHUDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarHeadUpDisplaysHUDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
