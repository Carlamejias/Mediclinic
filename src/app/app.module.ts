import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
// Se importa HttpClient y ServicioService para consumir el API en todo el programa
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './services/servicio.service';
// @NgModule se declara en imports HttpClient y en providers ServicioService
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    ServicioService,
    SQLite
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
