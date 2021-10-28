import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'client', component: RegistryClientComponent },
  { path: 'see-room-available', component: SeeRoomAvailableComponent },
  { path: 'see-room-busy', component: SeeRoomBusyComponent },
  { path: 'client-sales', component: VentasComponent },
  { path: 'ordinary-sales', component: OrdinarySalesComponent },
  { path: 'room-report', component: ReportRoomComponent },
  { path: 'report-sales', component: ReportSalesComponent },
  { path: 'create-reception', component: CreateReceptionComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'create-product-category', component: CreateSectionProductComponent },
  { path: 'update-reception', component: UpdateReceptionComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'update-room', component: UpdateRoomComponent },
  { path: 'super-root', component: CreateUserComponent }
  // { path: 'report-shifts', component: ReportSalesComponent }, todo componente pendientes por programar
  // { path: 'report-balance-base', component: ReportSalesComponent }, todo componente pendientes por programar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
