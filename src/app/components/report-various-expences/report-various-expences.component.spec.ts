import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVariousExpencesComponent } from './report-various-expences.component';

describe('ReportVariousExpencesComponent', () => {
  let component: ReportVariousExpencesComponent;
  let fixture: ComponentFixture<ReportVariousExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportVariousExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVariousExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
