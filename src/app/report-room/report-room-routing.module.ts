import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportRoomComponent} from './report-room.component';

const routes: Routes = [{path: '', component: ReportRoomComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoomRoutingModule { }
