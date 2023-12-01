import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAutomotiveAccessoriesMerchandiseComponent } from './other-automotive-accessories-merchandise.component';

describe('OtherAutomotiveAccessoriesMerchandiseComponent', () => {
  let component: OtherAutomotiveAccessoriesMerchandiseComponent;
  let fixture: ComponentFixture<OtherAutomotiveAccessoriesMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherAutomotiveAccessoriesMerchandiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherAutomotiveAccessoriesMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
