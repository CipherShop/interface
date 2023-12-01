import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatServiceToolsComponent } from './boat-service-tools.component';

describe('BoatServiceToolsComponent', () => {
  let component: BoatServiceToolsComponent;
  let fixture: ComponentFixture<BoatServiceToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatServiceToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatServiceToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
