import { NgModule , enableProdMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy,Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';

import { INotificationPayload } from 'cordova-plugin-fcm-with-dependecy-updated';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { TaskService } from '../app/services/task.service';
import { FCMPlugin } from '../../plugins/cordova-plugin-fcm-with-dependecy-updated/src/www/FCMPlugin';

registerLocaleData(localeMx,'ex-MX');
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SQLitePorter,
    NativeStorage,
    Storage,
    Geolocation,
    Network,
    NativeGeocoder,
    Camera,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    public hasPermission: boolean;
    public token: string;
    public pushPayload: INotificationPayload;
    constructor(private platform: Platform, private fcm: FCM,private taskService: TaskService,private nativeStorage: NativeStorage) {
        this.setupFCM();
    }
    private async setupFCM() {
    await this.platform.ready();
    console.log('FCM setup started');

    if (!this.platform.is('cordova')) {
      return;
    }
    console.log('In cordova platform');

    console.log('Subscribing to token updates');
    this.fcm.onTokenRefresh().subscribe((newToken) => {
      this.token = newToken;
      console.log('onTokenRefresh received event with: ', newToken);
      console.log("TRYING PUSH_ID");
      this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("ACTUALIZANDO PUSH_ID!!");
                console.log("uuid_cliente: " + app.uuid_cliente);
                console.log("push_id: " + this.token);
                this.taskService.updInfoPerfil(app.uuid_cliente,{push_id:this.token}).subscribe(data=>{
                    console.log("PATCH PERFIL");
                });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    });

    console.log('Subscribing to new notifications');
    this.fcm.onNotification().subscribe((payload) => {
      this.pushPayload = payload;
      console.log('onNotification received event with: ', payload);
    });

    this.hasPermission = await this.fcm.requestPushPermission();
    console.log('requestPushPermission result: ', this.hasPermission);

    this.token = await this.fcm.getToken();
   
    this.nativeStorage.getItem('app')
    .then(
        app => {
            console.log("ACTUALIZANDO PUSH_ID GET TOKEN!!");
            console.log("uuid_cliente: " + app.uuid_cliente);
            console.log("push_id: " + this.token);
            this.taskService.updInfoPerfil(app.uuid_cliente,{push_id:this.token}).subscribe(data=>{
                console.log("Se envio push_id");
            });
        },
        error => console.error("NO HAY UUID_CLIENTE")
    );
    console.log('getToken result: ', this.token);

    this.pushPayload = await this.fcm.getInitialPushPayload();
    console.log('getInitialPushPayload result: ', this.pushPayload);
  }

  public get pushPayloadString() {
    return JSON.stringify(this.pushPayload, null, 4);
  }
}
enableProdMode();
