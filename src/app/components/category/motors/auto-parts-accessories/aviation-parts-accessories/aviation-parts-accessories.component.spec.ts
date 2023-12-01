import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationPartsAccessoriesComponent } from './aviation-parts-accessories.component';

describe('AviationPartsAccessoriesComponent', () => {
  let component: AviationPartsAccessoriesComponent;
  let fixture: ComponentFixture<AviationPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
