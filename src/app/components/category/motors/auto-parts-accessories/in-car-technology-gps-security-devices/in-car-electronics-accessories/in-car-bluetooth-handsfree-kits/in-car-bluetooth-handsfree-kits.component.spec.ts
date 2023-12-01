import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarBluetoothHandsfreeKitsComponent } from './in-car-bluetooth-handsfree-kits.component';

describe('InCarBluetoothHandsfreeKitsComponent', () => {
  let component: InCarBluetoothHandsfreeKitsComponent;
  let fixture: ComponentFixture<InCarBluetoothHandsfreeKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarBluetoothHandsfreeKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarBluetoothHandsfreeKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
