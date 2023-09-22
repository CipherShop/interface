import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPartsAccessoriesComponent } from './auto-parts-accessories.component';

describe('AutoPartsAccessoriesComponent', () => {
  let component: AutoPartsAccessoriesComponent;
  let fixture: ComponentFixture<AutoPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
