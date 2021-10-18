import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateProductComponent } from './create-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from '../services/product.service';


@NgModule({
  declarations: [CreateProductComponent],
    imports: [
        CommonModule,
        CreateProductRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  exports: [CreateProductComponent],
  providers: [ProductService]
})
export class CreateProductModule { }
