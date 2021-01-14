import {Component,ElementRef,OnInit,Renderer2,ViewChild} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { TaskService } from '../services/task.service';
import { $ } from 'protractor';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
declare var google;
interface MarcadoMap {
    position: {
        lat: number,
        lng: number,
    };
    title: string;
}
interface informacionSucursal{
    id_sucursal:number;
    nombre:string;
    telefono_1:string;
    telefono_2:string;
    mail:string;
    direccion:string;
}
@Component({
    selector: 'app-sucursales',
    templateUrl: './sucursales.page.html',
    styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
    latitude: any = 0; //latitude
    longitude: any = 0; //longitude
    @ViewChild("splash") splash: ElementRef;
    map = null;


    sucursalActual: informacionSucursal;
    sucursales: any;
    marcadorActual: MarcadoMap;
    cantmarkers: any;
    titulo: string;
    tiendaSelected: any;

    constructor(private router: Router,private geolocation: Geolocation, 
        private route: ActivatedRoute, private renderer: Renderer2,
        private taskService: TaskService,public loadingController: LoadingController) {
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
    ngOnInit() {
        this.tiendaSelected=0;
        this.taskService.getAllTasks()
        .subscribe(sucursales => {
            this.sucursales = sucursales;
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
                    setTimeout(() => {
                       this.sucursalActual={
                        id_sucursal:this.sucursalActual.id_sucursal,
                        nombre:sucursal.nombre,
                        telefono_1:sucursal.telefono_1,
                        telefono_2:sucursal.telefono_2,
                        mail:sucursal.mail,
                        direccion:sucursal.direccion
                    }
                    console.log("0")
                    this.loadMap(marcador);
                    console.log("1") 
                    }, 200);
                    
                    
                }
            });
        });
    }
    
    checkValue(event) {
        this.sucursalActual.id_sucursal=event.detail.value;
        this.actualizarMarcador();
        event.detail.value=0;
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
                setTimeout(() => {
                    this.sucursalActual={
                    id_sucursal:this.sucursalActual.id_sucursal,
                    nombre:sucursal.nombre,
                    telefono_1:sucursal.telefono_1,
                    telefono_2:sucursal.telefono_2,
                    mail:sucursal.mail,
                    direccion:sucursal.direccion
                }
                console.log("0")
                this.loadMap(marcador);
                console.log("1")
                }, 100);
                
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
        this.map = new google.maps.Map(mapEle, {
            center: centerMap,
            zoom: 12
        });

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            console.log("a")
            this.renderMarkers();
            mapEle.classList.add('show-map');
        });
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
    /*loadMap(lat,long) {
      // create a new map by passing HTMLElement
      const mapEle: HTMLElement = document.getElementById('map');
      // create LatLng object
      const myLatLng = {lat: lat, lng: long};
      //Obtener coordenadas
      const latLng = new google.maps.LatLng();

      // create map
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 10,
        disableDefaultUI:true
      });
      let infoWindow;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            // infoWindow.setPosition(pos);
            // infoWindow.setContent("Location found.");
            // infoWindow.open(this.map);
            this.map.setCenter(pos);
          },
          () => {
            //handleLocationError(true, infoWindow, this.map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        alert("Error de Geolocalizacion")
      }

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        //this.renderMarkers();
        mapEle.classList.add('show-map');
        this.renderMarkers();
      });
    }*/


    onclickNotificaciones() {
        this.router.navigate(['/notificaciones']);
    }
    onclickUbicaciones() {
        this.router.navigate(['/ubicaciones']);
    }
    onclickMenu() {
        this.router.navigate(['/principal']);
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
        this.tiendaSelected=0
        this.router.navigate(['/sucursales']);
    }
}