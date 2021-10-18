import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateReceptionComponent} from './create-reception.component';

const routes: Routes = [
  {path: '', component: CreateReceptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateReceptionRoutingModule { }
