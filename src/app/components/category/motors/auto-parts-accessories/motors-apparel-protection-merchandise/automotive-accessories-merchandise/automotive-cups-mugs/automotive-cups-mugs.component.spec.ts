import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveCupsMugsComponent } from './automotive-cups-mugs.component';

describe('AutomotiveCupsMugsComponent', () => {
  let component: AutomotiveCupsMugsComponent;
  let fixture: ComponentFixture<AutomotiveCupsMugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveCupsMugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveCupsMugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
