import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveAccessoriesMerchandiseComponent } from './automotive-accessories-merchandise.component';

describe('AutomotiveAccessoriesMerchandiseComponent', () => {
  let component: AutomotiveAccessoriesMerchandiseComponent;
  let fixture: ComponentFixture<AutomotiveAccessoriesMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveAccessoriesMerchandiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveAccessoriesMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
