import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardMidSectionsComponent } from './outboard-mid-sections.component';

describe('OutboardMidSectionsComponent', () => {
  let component: OutboardMidSectionsComponent;
  let fixture: ComponentFixture<OutboardMidSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardMidSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardMidSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
