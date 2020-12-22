import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    NavigationExtras,
    ActivatedRoute
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';
@Component({
    selector: 'app-ubicaciones',
    templateUrl: './ubicaciones.page.html',
    styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {
    sucursales: any;
    tiendaSelected = 0;
    constructor(private router: Router, private route: ActivatedRoute,
        private taskService: TaskService) {}

    ngOnInit() {
        this.taskService.getAllTasks()
            .subscribe(sucursales => {
                this.sucursales = sucursales;
            });
    }
    goSucursales(event) {
        this.router.navigate(['/sucursales'], {
            queryParams: {
                sucursal: event.detail.value
            }
        });
    }
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
        this.router.navigate(['/sucursales']);
    }
}