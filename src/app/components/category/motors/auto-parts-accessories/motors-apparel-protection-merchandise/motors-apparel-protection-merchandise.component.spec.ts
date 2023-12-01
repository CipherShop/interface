import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorsApparelProtectionMerchandiseComponent } from './motors-apparel-protection-merchandise.component';

describe('MotorsApparelProtectionMerchandiseComponent', () => {
  let component: MotorsApparelProtectionMerchandiseComponent;
  let fixture: ComponentFixture<MotorsApparelProtectionMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorsApparelProtectionMerchandiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorsApparelProtectionMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
