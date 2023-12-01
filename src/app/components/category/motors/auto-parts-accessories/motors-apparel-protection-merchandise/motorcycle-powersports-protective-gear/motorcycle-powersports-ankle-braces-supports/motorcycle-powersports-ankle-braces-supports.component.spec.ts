import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsAnkleBracesSupportsComponent } from './motorcycle-powersports-ankle-braces-supports.component';

describe('MotorcyclePowersportsAnkleBracesSupportsComponent', () => {
  let component: MotorcyclePowersportsAnkleBracesSupportsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsAnkleBracesSupportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsAnkleBracesSupportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsAnkleBracesSupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
