import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeRoomBusyRoutingModule } from './see-room-busy-routing.module';
import { SeeRoomBusyComponent } from './see-room-busy.component';
import {RoomService} from '../services/room.service';
import {ClientService} from '../services/client';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [SeeRoomBusyComponent],
  imports: [
    CommonModule,
    SeeRoomBusyRoutingModule,
    HttpClientModule,
    NgxSimpleCountdownModule
  ],
  exports: [SeeRoomBusyComponent],
  providers: [RoomService, ClientService]
})
export class SeeRoomBusyModule { }
