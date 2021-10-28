import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoomRoutingModule } from './update-room-routing.module';
import { UpdateRoomComponent } from './update-room.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UpdateRoomComponent],
    imports: [
        CommonModule,
        UpdateRoomRoutingModule,
        ReactiveFormsModule
    ],
  exports: [UpdateRoomComponent]
})
export class UpdateRoomModule { }
