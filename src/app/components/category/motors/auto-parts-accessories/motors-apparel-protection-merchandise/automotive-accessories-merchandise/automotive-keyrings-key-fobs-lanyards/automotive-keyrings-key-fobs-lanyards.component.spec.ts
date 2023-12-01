import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveKeyringsKeyFobsLanyardsComponent } from './automotive-keyrings-key-fobs-lanyards.component';

describe('AutomotiveKeyringsKeyFobsLanyardsComponent', () => {
  let component: AutomotiveKeyringsKeyFobsLanyardsComponent;
  let fixture: ComponentFixture<AutomotiveKeyringsKeyFobsLanyardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveKeyringsKeyFobsLanyardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveKeyringsKeyFobsLanyardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
