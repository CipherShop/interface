import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatStorageComponent } from './boat-storage.component';

describe('BoatStorageComponent', () => {
  let component: BoatStorageComponent;
  let fixture: ComponentFixture<BoatStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
