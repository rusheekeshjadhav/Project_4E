import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsKpiComponent } from './details-kpi.component';

describe('DetailsKpiComponent', () => {
  let component: DetailsKpiComponent;
  let fixture: ComponentFixture<DetailsKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
