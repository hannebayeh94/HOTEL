import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateReceptionRoutingModule } from './update-reception-routing.module';
import { UpdateReceptionComponent } from './update-reception.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UpdateReceptionComponent],
    imports: [
        CommonModule,
        UpdateReceptionRoutingModule,
        ReactiveFormsModule
    ],
  exports: [UpdateReceptionComponent]
})
export class UpdateReceptionModule { }
