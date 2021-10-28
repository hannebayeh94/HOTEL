import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportVariousExpencesRoutingModule } from './report-various-expences-routing.module';
import { ReportVariousExpencesComponent } from './report-various-expences.component';


@NgModule({
  declarations: [ReportVariousExpencesComponent],
  imports: [
    CommonModule,
    ReportVariousExpencesRoutingModule
  ]
})
export class ReportVariousExpencesModule { }
