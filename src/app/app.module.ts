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
import { uuid_usuario } from './interfaces/task';

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
    public plataforma:string;
    constructor(private platform: Platform, private fcm: FCM,private taskService: TaskService,private nativeStorage: NativeStorage) {
        this.setupFCM();
    }
    ngOnInit(){
        console.log('Push id token');
        console.log(this.token);
    }
    ionViewDidEnter(){
        console.log('Push id token');
        console.log(this.token);
    }
    private async setupFCM() {
    await this.platform.ready();
    if (this.platform.is('android')) {
        this.plataforma="android";
        console.log("running on Android device!");
    }
    if (this.platform.is('ios')) {
        this.plataforma="ios";
        console.log("running on iOS device!");
    }
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
                let pushData={
                    uuidcliente:app.uuid_cliente,
                    tokendevice:this.token,
                    deviceplatform:this.plataforma
                }
                console.log(pushData);
                this.taskService.setTokenId(pushData).subscribe(data=>{
                    console.log("SET TOKEN ID");
                });
            },
            error =>{ 
                console.error("NO HAY UUID_CLIENTE");
                let pushData={
                    uuidcliente:"",
                    tokendevice:this.token,
                    deviceplatform:this.plataforma
                }
                console.log(pushData);
                this.taskService.setTokenId(pushData).subscribe(data=>{
                    console.log("SET TOKEN ID");
                });
            }
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
            console.log("ACTUALIZANDO PUSH_ID GET TOKEN UUID CLIENTE!!");
            let pushData={
                uuidcliente:app.uuid_cliente,
                tokendevice:this.token,
                deviceplatform:this.plataforma
            }
            console.log(pushData);
            
            this.taskService.setTokenId(pushData).subscribe(data=>{
                console.log("SET TOKEN ID");
            });
        },
        error =>{
            console.error("NO HAY UUID_CLIENTE");
            let pushData={
                uuidcliente:"",
                tokendevice:this.token,
                deviceplatform:this.plataforma
            }
            console.log(pushData);
            this.taskService.setTokenId(pushData).subscribe(data=>{
                console.log("SET TOKEN ID");
            });
        }
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
