
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {NavController } from '@ionic/angular';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  TaskService
} from '../services/task.service';
import {
  $
} from 'protractor';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google;
interface MarcadoMap {
  position: {
      lat: number,
      lng: number,
  };
  title: string;
}
import { LoadingController } from '@ionic/angular';
interface informacionSucursal{
  id_sucursal:number;
  nombre:string;
  telefono_1:string;
  telefono_2:string;
  mail:string;
  direccion:string;
}
@Component({
  selector: 'app-sucursalcerca',
  templateUrl: './sucursalcerca.page.html',
  styleUrls: ['./sucursalcerca.page.scss'],
})
export class SucursalcercaPage implements OnInit {
  currentLatitude: any; //latitude
  currentLongitude: any; //longitude
  @ViewChild("splash") splash: ElementRef;
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map = null;
  sucursalActual: informacionSucursal;
  sucursales: any;
  marcadorActual: MarcadoMap;
  cantmarkers: any;
  titulo: string;
  distanciaSucursales: any[]=[];
    
  constructor(private router: Router, private geolocation: Geolocation,public loadingController: LoadingController,
      private nativeGeocoder: NativeGeocoder, private route: ActivatedRoute, private renderer: Renderer2,
      private taskService: TaskService,public navCtrl: NavController){
      this.route.queryParams.subscribe(params => {
          this.sucursalActual = {
              id_sucursal:params.sucursal,
              nombre:"",
              telefono_1:"",
              telefono_2:"",
              mail:"",
              direccion:""
          };
      });
  }
  loading:any;
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'clase-loading',
      message: 'Buscando posisionamiento...',
    });
    await this.loading.present();
  }

  ngOnInit() {
    this.presentLoading();
    console.log("Sucursal cerca")
    this.getCurrentPosition();
    //$("#categoria_select").click()
  }
  ionViewWillEnter(){
    //$("#categoria_select").click()
  }
  extraerDistanciaMenor(){
      let distanciaActual=9999;
      this.sucursales.forEach( sucursal => {
          let coordenadas=sucursal.coordenadas.split(", ")
          let distancia = this.calcularDistancia(this.currentLatitude,this.currentLongitude,coordenadas[0],coordenadas[1]);
          console.log(distanciaActual+"<"+distancia);
          console.log(distanciaActual);
          console.log(distancia);
          if(distanciaActual > distancia){
              console.log("=== ES MAYOR ===");
              distanciaActual=distancia;
              this.distanciaSucursales=[];
              this.distanciaSucursales.push({
                  sucursal:sucursal,
                  distancia:distancia.toFixed(2)
              })
          }
      });
      console.log(this.distanciaSucursales);
      console.log(this.distanciaSucursales[0].sucursal.id_sucursal)
      this.actualizarMarcadorPositionActual(this.distanciaSucursales[0].sucursal.id_sucursal);
  }
  calcularDistancia(lat1, lon1, lat2, lon2) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
      }
      else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
              dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          dist = dist * 1.609344
          return dist;
      }
  }
  getCurrentPosition() {
      this.geolocation.getCurrentPosition().then((resp) => {
          this.currentLatitude = resp.coords.latitude;
          this.currentLongitude = resp.coords.longitude;
          this.taskService.getAllTasks()
          .subscribe(sucursales => {
              this.sucursales = sucursales;
              this.extraerDistanciaMenor();
          });
        }).catch((error) => {
          console.log('Error getting location', error);
        });
  }
  checkValue(event) {
      this.sucursalActual.id_sucursal=event.detail.value;
      this.actualizarMarcador();
  }
  actualizarMarcadorPositionActual(idsucursal){
      this.sucursales.forEach(sucursal => {
        console.log("For "+idsucursal + sucursal.id_sucursal)
          if (sucursal.id_sucursal == idsucursal) {
            console.log("Entro al if")
              let coordenadas = sucursal.coordenadas.split(", ");
              let marcador: MarcadoMap = {
                  position: {
                      lat: parseInt(coordenadas[0]),
                      lng: parseInt(coordenadas[1])
                  },
                  title: sucursal.nombre
              }
              this.sucursalActual={
                  id_sucursal:idsucursal,
                  nombre:sucursal.nombre,
                  telefono_1:sucursal.telefono_1,
                  telefono_2:sucursal.telefono_2,
                  mail:sucursal.mail,
                  direccion:sucursal.direccion
              }  
              this.loadMap(marcador)
            this.loading.dismiss()
          }
      });
  }
  
  actualizarMarcador(){
      this.sucursales.forEach(sucursal => {
          if (sucursal.id_sucursal == this.sucursalActual.id_sucursal) {
              let coordenadas = sucursal.coordenadas.split(", ");
              let marcador: MarcadoMap = {
                  position: {
                      lat: parseInt(coordenadas[0]),
                      lng: parseInt(coordenadas[1])
                  },
                  title: sucursal.nombre
              }
              this.sucursalActual={
                  id_sucursal:this.sucursalActual.id_sucursal,
                  nombre:sucursal.nombre,
                  telefono_1:sucursal.telefono_1,
                  telefono_2:sucursal.telefono_2,
                  mail:sucursal.mail,
                  direccion:sucursal.direccion
              }
              this.loadMap(marcador);
          }
      });
      
    }
  loadMap(marcador: MarcadoMap) {
      const mapEle: HTMLElement = document.getElementById('map');
      this.marcadorActual = marcador;
      let centerMap = {
          lat: this.marcadorActual.position.lat,
          lng: this.marcadorActual.position.lng
      }
      setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: centerMap,
            zoom: 12
        });
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.renderMarkers();
            mapEle.classList.add('show-map');
        });    
      }, 1000);
      
  }
  addMarker(marker) {
      return new google.maps.Marker({
          position: marker.position,
          map: this.map,
          title: marker.title
      });
  }
  renderMarkers() {
      // this.marker.forEach(marker => {
      this.addMarker(this.marcadorActual);
      // });1
  }
  onclickNotificaciones() {
      this.router.navigate(['/notificaciones']);
  }
  onclickUbicaciones() {
      this.router.navigate(['/ubicaciones']);
  }
  onclickMenu() {
      this.navCtrl.navigateRoot(['/principal']);
  }
  onclickCategorias() {
      this.router.navigate(['/categorias']);
  }
  onclickUsuario() {
      this.router.navigate(['/usuario']);
  }
  onclickProducto() {
      this.router.navigate(['/producto']);
  }
  onClickCarrito() {
      this.router.navigate(['/carrito']);
  }
  clickOnSucursales() {
      this.router.navigate(['/sucursales']);
  }
}