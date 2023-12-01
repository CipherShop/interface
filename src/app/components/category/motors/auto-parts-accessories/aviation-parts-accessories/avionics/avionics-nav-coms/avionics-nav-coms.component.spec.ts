import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsNAVCOMsComponent } from './avionics-nav-coms.component';

describe('AvionicsNAVCOMsComponent', () => {
  let component: AvionicsNAVCOMsComponent;
  let fixture: ComponentFixture<AvionicsNAVCOMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsNAVCOMsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsNAVCOMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
