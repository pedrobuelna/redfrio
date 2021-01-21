import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificaciones, Task, Notificacion } from './../interfaces/task';
import { Sucursal } from './../interfaces/task';
import { Login } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  //private api = 'https://jsonplaceholder.typicode.com';
  //private api = 'http://webservicearca.000webhostapp.com';
  private api = 'http://178.128.14.243:3000';
  constructor(
    private http: HttpClient
  ) {

  }
  getAllTasks() {
    //const path = `${this.api}/todos`;
    const path = `http://178.128.14.243:3000/sucursales`;
    return this.http.get<Sucursal[]>(path);
  }
  getTask(id: string) {
    //const path = `${this.api}/todos/${id}`;
    const path = `http://webservicearca.000webhostapp.com/refacciones/${id}`;
    return this.http.get<Task>(path);
  }
  createTask(task: Task) {
    // const path = `${this.api}/todos`;
    const path = `${this.api}/clientes`;
    return this.http.post(path, task);
  }
  getNotificaciones() {
    const path = `${this.api}/notificaciones?uuid_cliente=eq.8e96af95-4575-47e9-a2aa-b56aba2f035f`;
    return this.http.get<Notificaciones[]>(path);
  }
  getNotificacionesNoLeidas() {
    const path = `${this.api}/notificaciones?uuid_cliente=eq.8e96af95-4575-47e9-a2aa-b56aba2f035f&status=eq.0`;
    return this.http.get<Notificaciones[]>(path);
  }
  updateNotificacion(task: Notificacion,uuid_cliente:any,uuid:any) {
    // const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/notificaciones?uuid_cliente=eq.${uuid_cliente}&uuid_notificacion=eq.${uuid}`
    return this.http.patch<Task>(path,task);
  }
  deleteTask(id: string) {
    // const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/refacciones/${id}`
    return this.http.delete(path);
  }
  getLogin(mail: any,contrasena:any) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/clientes?mail=eq.${mail}&password=eq.${contrasena}&status=eq.1`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  getFamilias() {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/familias`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  getFamilia(id:any) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/familias?id_familia=eq.${id}`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  getAllProductos() {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/productos`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  getProductos(id,ordenarpor) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/productos?familia_id=eq.${id}${ordenarpor}`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  getProducto(id:any) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/productos?uuid_producto=eq.${id}`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  sendMailUsr(usrMail:string){
    const path= `http://carteraclientes.com/sistema/enviarCorreoRegistroCliente/${usrMail}`;
    return this.http.patch<Task>(path,false);
  }
}
