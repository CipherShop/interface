import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaclavasMasksNeckWarmersComponent } from './balaclavas-masks-neck-warmers.component';

describe('BalaclavasMasksNeckWarmersComponent', () => {
  let component: BalaclavasMasksNeckWarmersComponent;
  let fixture: ComponentFixture<BalaclavasMasksNeckWarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalaclavasMasksNeckWarmersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalaclavasMasksNeckWarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
