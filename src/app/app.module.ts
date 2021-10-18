import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from './login/login.module';
import {VentasModule} from './ventas/ventas.module';
import {OrdinarySalesModule} from './ordinary-sales/ordinary-sales.module';
import {CreateRoomModule} from './create-room/create-room.module';
import {CreateReceptionModule} from './create-reception/create-reception.module';
import {CreateProductModule} from './create-product/create-product.module';
import {UpdateReceptionModule} from './update-reception/update-reception.module';
import {UpdateProductModule} from './update-product/update-product.module';
import {UpdateRoomModule} from './update-room/update-room.module';
import {RegistryClientModule} from './registry-client/registry-client.module';
import {SeeRoomAvailableModule} from './see-room-available/see-room-available.module';
import {SeeRoomBusyModule} from './see-room-busy/see-room-busy.module';
import {CreateUserModule} from './create-user/create-user.module';
import {CreateSectionProductModule} from './create-section-product/create-section-product.module';
import {ReportRoomModule} from './report-room/report-room.module';
import {ReportSalesModule} from './report-sales/report-sales.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BalanceService} from './services/balance.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        VentasModule,
        OrdinarySalesModule,
        CreateRoomModule,
        CreateReceptionModule,
        CreateProductModule,
        UpdateReceptionModule,
        UpdateProductModule,
        UpdateRoomModule,
        RegistryClientModule,
        SeeRoomAvailableModule,
        SeeRoomBusyModule,
        CreateUserModule,
        CreateSectionProductModule,
        ReportRoomModule,
        ReportSalesModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
