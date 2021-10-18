import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeeRoomAvailableRoutingModule } from './see-room-available-routing.module';
import { SeeRoomAvailableComponent } from './see-room-available.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SeeRoomAvailableComponent],
  imports: [
    CommonModule,
    SeeRoomAvailableRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SeeRoomAvailableComponent
  ]
})
export class SeeRoomAvailableModule { }
