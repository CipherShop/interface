import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseApparelComponent } from './merchandise-apparel.component';

describe('MerchandiseApparelComponent', () => {
  let component: MerchandiseApparelComponent;
  let fixture: ComponentFixture<MerchandiseApparelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandiseApparelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandiseApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
