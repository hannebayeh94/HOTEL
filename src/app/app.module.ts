import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './components/login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from './components/components.module';
import {ComponentsComponent} from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
