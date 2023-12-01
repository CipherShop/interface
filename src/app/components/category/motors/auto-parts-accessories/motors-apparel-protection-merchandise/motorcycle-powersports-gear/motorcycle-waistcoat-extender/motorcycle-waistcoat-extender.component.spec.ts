import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleWaistcoatExtenderComponent } from './motorcycle-waistcoat-extender.component';

describe('MotorcycleWaistcoatExtenderComponent', () => {
  let component: MotorcycleWaistcoatExtenderComponent;
  let fixture: ComponentFixture<MotorcycleWaistcoatExtenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleWaistcoatExtenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleWaistcoatExtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
