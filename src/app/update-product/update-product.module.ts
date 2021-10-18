import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProductRoutingModule } from './update-product-routing.module';
import { UpdateProductComponent } from './update-product.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UpdateProductComponent],
    imports: [
        CommonModule,
        UpdateProductRoutingModule,
        ReactiveFormsModule
    ],
  exports: [UpdateProductComponent]
})
export class UpdateProductModule { }
