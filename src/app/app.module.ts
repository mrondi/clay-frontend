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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigComponent } from './components/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    FlujoCajaComponent,
    HeaderComponent,
    MenuMainComponent,
    DefaultComponent,
    LangPipe,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
