import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistryClientComponent} from './registry-client.component';

const routes: Routes = [
  {path: '', component: RegistryClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistryClientRoutingModule { }
