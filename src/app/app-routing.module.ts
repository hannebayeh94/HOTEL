import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ComponentsComponent} from './components/components.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {
    path: 'home',
    component: ComponentsComponent,
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
