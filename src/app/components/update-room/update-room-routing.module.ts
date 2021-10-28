import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateRoomComponent} from './update-room.component';

const routes: Routes = [
  {path: '', component: UpdateRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoomRoutingModule { }
