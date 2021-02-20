import { Component, OnInit } from '@angular/core';
import{TaskService} from '../services/task.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {
  constructor(private taskService: TaskService,private nativeStorage: NativeStorage,
    private router: Router) { }
  direcciones: any;
  ngOnInit() {
    this.nativeStorage.getItem('app')
    .then(
        app => {
            console.log("==APP DATA==");
            console.log(app);
            console.log("uuid_cliente: " + app.uuid_cliente);
            this.taskService.getDireccionCliente(app.uuid_cliente)
            .subscribe(direcciones => {
                this.direcciones = direcciones;
                console.log("direcciones: ", direcciones);
            });
        },
        error => console.error("NO HAY UUID_CLIENTE")
    );
  }
  onclickEditarDireccion(){
    this.router.navigate(['/editardireccion']);
  }
}
