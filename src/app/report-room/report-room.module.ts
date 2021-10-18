import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoomRoutingModule } from './report-room-routing.module';
import { ReportRoomComponent } from './report-room.component';


@NgModule({
  declarations: [ReportRoomComponent],
  imports: [
    CommonModule,
    ReportRoomRoutingModule
  ],
  exports: [ReportRoomComponent]
})
export class ReportRoomModule { }
