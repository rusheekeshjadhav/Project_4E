import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayKpiComponent } from './display-kpi.component';

describe('DisplayKpiComponent', () => {
  let component: DisplayKpiComponent;
  let fixture: ComponentFixture<DisplayKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
