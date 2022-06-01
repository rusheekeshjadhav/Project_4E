import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKPIComponent } from './create-kpi.component';

describe('CreateKPIComponent', () => {
  let component: CreateKPIComponent;
  let fixture: ComponentFixture<CreateKPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
