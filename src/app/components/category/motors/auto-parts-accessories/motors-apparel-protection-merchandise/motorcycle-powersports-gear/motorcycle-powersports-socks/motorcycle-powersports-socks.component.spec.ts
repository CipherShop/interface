import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsSocksComponent } from './motorcycle-powersports-socks.component';

describe('MotorcyclePowersportsSocksComponent', () => {
  let component: MotorcyclePowersportsSocksComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsSocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
