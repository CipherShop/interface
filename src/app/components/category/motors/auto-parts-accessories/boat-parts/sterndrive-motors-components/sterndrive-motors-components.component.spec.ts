import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveMotorsComponentsComponent } from './sterndrive-motors-components.component';

describe('SterndriveMotorsComponentsComponent', () => {
  let component: SterndriveMotorsComponentsComponent;
  let fixture: ComponentFixture<SterndriveMotorsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveMotorsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveMotorsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
