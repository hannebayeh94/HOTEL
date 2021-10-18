import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../services/product.service';


@NgModule({
  declarations: [VentasComponent],
  exports: [
    VentasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FormsModule
  ],
  providers: [ProductService]
})
export class VentasModule { }
