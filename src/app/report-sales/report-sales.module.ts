import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportSalesRoutingModule } from './report-sales-routing.module';
import { ReportSalesComponent } from './report-sales.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ReportSalesComponent],
    exports: [
        ReportSalesComponent
    ],
    imports: [
        CommonModule,
        ReportSalesRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ReportSalesModule { }
