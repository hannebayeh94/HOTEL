import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReceptionRoutingModule } from './create-reception-routing.module';
import { CreateReceptionComponent } from './create-reception.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateReceptionComponent],
  imports: [
    CommonModule,
    CreateReceptionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateReceptionComponent]
})
export class CreateReceptionModule { }
