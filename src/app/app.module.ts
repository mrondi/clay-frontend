import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlujoCajaComponent } from './pages/flujo-caja/flujo-caja.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LangPipe } from './pipes/lang.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlujoCajaComponent,
    HeaderComponent,
    MenuMainComponent,
    DefaultComponent,
    LangPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
