import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdinarySalesComponent} from './ordinary-sales.component';

const routes: Routes = [
  {path: '', component: OrdinarySalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdinarySalesRoutingModule { }
