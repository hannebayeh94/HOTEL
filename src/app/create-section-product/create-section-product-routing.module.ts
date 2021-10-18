import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSectionProductComponent} from './create-section-product.component';

const routes: Routes = [
  {path: '', component: CreateSectionProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSectionProductRoutingModule { }
