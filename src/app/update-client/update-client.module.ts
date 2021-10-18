import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateClientRoutingModule } from './update-client-routing.module';
import { UpdateClientComponent } from './update-client.component';


@NgModule({
  declarations: [UpdateClientComponent],
  imports: [
    CommonModule,
    UpdateClientRoutingModule
  ]
})
export class UpdateClientModule { }
