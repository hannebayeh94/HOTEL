import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoomRoutingModule } from './create-room-routing.module';
import { CreateRoomComponent } from './create-room.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from '../services/product.service';

@NgModule({
  declarations: [CreateRoomComponent],
  imports: [
    CommonModule,
    CreateRoomRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [CreateRoomComponent],
  providers: [ProductService]
})
export class CreateRoomModule { }
