import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeeRoomAvailableComponent} from './see-room-available.component';

const routes: Routes = [
  {path: '', component: SeeRoomAvailableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeRoomAvailableRoutingModule { }
