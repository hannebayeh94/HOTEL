import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSectionProductRoutingModule } from './create-section-product-routing.module';
import { CreateSectionProductComponent } from './create-section-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CreateSectionProductComponent],
  imports: [
    CommonModule,
    CreateSectionProductRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [CreateSectionProductComponent],
  providers: [ProductService]
})
export class CreateSectionProductModule { }
