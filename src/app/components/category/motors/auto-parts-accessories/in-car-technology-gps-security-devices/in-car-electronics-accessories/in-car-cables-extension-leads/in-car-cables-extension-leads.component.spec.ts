import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarCablesExtensionLeadsComponent } from './in-car-cables-extension-leads.component';

describe('InCarCablesExtensionLeadsComponent', () => {
  let component: InCarCablesExtensionLeadsComponent;
  let fixture: ComponentFixture<InCarCablesExtensionLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarCablesExtensionLeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarCablesExtensionLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
