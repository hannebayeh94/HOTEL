import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryClientRoutingModule } from './registry-client-routing.module';
import { RegistryClientComponent } from './registry-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClientService} from '../services/client';
import {RoomService} from '../services/room.service';


@NgModule({
  declarations: [RegistryClientComponent],
  imports: [
    CommonModule,
    RegistryClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RegistryClientComponent],
  providers: [ClientService, RoomService]
})
export class RegistryClientModule { }
