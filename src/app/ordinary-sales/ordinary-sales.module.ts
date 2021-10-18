import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdinarySalesRoutingModule } from './ordinary-sales-routing.module';
import { OrdinarySalesComponent } from './ordinary-sales.component';


@NgModule({
  declarations: [OrdinarySalesComponent],
  imports: [
    CommonModule,
    OrdinarySalesRoutingModule
  ],
  exports: [OrdinarySalesComponent]
})
export class OrdinarySalesModule { }
