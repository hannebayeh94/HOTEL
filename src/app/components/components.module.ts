import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import {UserServices} from '../core/services/user.services';
import {BalanceService} from '../core/services/balance.service';
import {ClientService} from '../core/services/client';
import {RoomService} from '../core/services/room.service';
import { ProductService } from '../core/services/product.service';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryClientComponent } from './registry-client/registry-client.component';
import { SeeRoomAvailableComponent } from './see-room-available/see-room-available.component';
import { SeeRoomBusyComponent } from './see-room-busy/see-room-busy.component';
import { VentasComponent } from './ventas/ventas.component';
import { OrdinarySalesComponent } from './ordinary-sales/ordinary-sales.component';
import { ReportRoomComponent } from './report-room/report-room.component';
import { ReportSalesComponent } from './report-sales/report-sales.component';
import { CreateReceptionComponent } from './create-reception/create-reception.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CreateSectionProductComponent } from './create-section-product/create-section-product.component';
import { UpdateReceptionComponent } from './update-reception/update-reception.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    RegistryClientComponent,
    SeeRoomAvailableComponent,
    SeeRoomBusyComponent,
    VentasComponent,
    OrdinarySalesComponent,
    ReportRoomComponent,
    ReportSalesComponent,
    CreateReceptionComponent,
    CreateProductComponent,
    CreateRoomComponent,
    CreateSectionProductComponent,
    UpdateReceptionComponent,
    UpdateProductComponent,
    UpdateRoomComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    NgxSimpleCountdownModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
  ],
  providers: [
    RoomService,
    ClientService,
    UserServices,
    ProductService,
    BalanceService]
})
export class ComponentsModule { }
