import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveBackpacksBagsComponent } from './automotive-backpacks-bags.component';

describe('AutomotiveBackpacksBagsComponent', () => {
  let component: AutomotiveBackpacksBagsComponent;
  let fixture: ComponentFixture<AutomotiveBackpacksBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveBackpacksBagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveBackpacksBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
