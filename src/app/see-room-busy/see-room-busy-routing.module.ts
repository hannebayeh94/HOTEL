import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeeRoomBusyComponent} from './see-room-busy.component';

const routes: Routes = [
  {path: '', component: SeeRoomBusyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeRoomBusyRoutingModule { }
