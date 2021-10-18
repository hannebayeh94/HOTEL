import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', loadChildren: './login/login.module#LoginModule'},
  {path: 'home', component: HomeComponent},
  {path: 'sales', loadChildren: './ventas/ventas.module#VentasModule'},
  {path: 'ordinary-sales', loadChildren: './ordinary-sales/ordinary-sales#OrdinarySalesModule'},
  {path: 'create-room', loadChildren: './create-room/create-room#CreateRoomModule'},
  {path: 'update-room', loadChildren: './update-room/update-room#UpdateRoomModule'},
  {path: 'create-reception', loadChildren: './create-reception/create-reception#CreateReceptionModule'},
  {path: 'update-reception', loadChildren: './update-reception/update-reception#UpdateReceptionModule'},
  {path: 'create-product', loadChildren: './create-product/create-product#CreateProductModule'},
  {path: 'update-product', loadChildren: './update-product/update-product#UpdateProductModule'},
  {path: 'registry-client', loadChildren: './registry-client/registry-client.module#RegistryClientModule'},
  {path: 'see-room-available', loadChildren: './see-room-available/see-room-available.module#SeeRoomAvailableModule'},
  {path: 'see-room-busy', loadChildren: './see-room-busy/see-room-busy.module#SeeRoomBusyModule'},
  {path: 'create-user', loadChildren: './create-user/create-user.module#CreateUserModule'},
  {path: 'create-section-product', loadChildren: './create-section-product/create-section-product.module#CreateSectionProductModule'},
  {path: 'report-room', loadChildren: './report-room/report-room.module#ReportRoomModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
