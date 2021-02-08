import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    Notificaciones,
    Notificacion,
    Perfiles,
    Sucursal,
    Login,
    Task,
    productoCarrito,
    agregarProductoCarrito,
    carrito_activo_detalles,
    carrito_activo
} from './../interfaces/task';

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
        return this.http.get < Sucursal[] > (path);
    }
    
    getTask(id: string) {
        //const path = `${this.api}/todos/${id}`;
        const path = `http://webservicearca.000webhostapp.com/refacciones/${id}`;
        return this.http.get < Task > (path);
    }
    createTask(task: Task) {
        // const path = `${this.api}/todos`;
        const path = `${this.api}/clientes`;
        return this.http.post(path, task);
    }
    updateTask(task: Task) {
        // const path = `${this.api}/todos/${task.id}`;
        //const path = `${this.api}/refacciones/${task.id}`;
        //return this.http.put<Task>(path, task);
    }
    deleteTask(id: string) {
        // const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/refacciones/${id}`
        return this.http.delete(path);
    }
    getLogin(mail: any, contrasena: any) {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/clientes?mail=eq.${mail}&password=eq.${contrasena}&status=eq.1`;
        //alert(path)
        return this.http.get < Task > (path);
    }
    getFamilias() {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/familias`;
        //alert(path)
        return this.http.get < Task > (path);
    }
    getFamilia(id: any) {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/familias?id_familia=eq.${id}`;
        //alert(path)
        return this.http.get < Task > (path);
    }
    getAllProductos() {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/productos`;
        //alert(path)
        return this.http.get < Task > (path);
    }
    // getProductos(id) {
    //     //const path = `${this.api}/todos/${id}`;
    //     const path = `${this.api}/productos?familia_id=eq.${id}`;
    //     //alert(path)
    //     return this.http.get < Task > (path);
    // }
    getProductos(id,ordenarpor) {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/productos?familia_id=eq.${id}${ordenarpor}`;
        //alert(path)
        return this.http.get<Task>(path);
    }
    getProducto(id: any) {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/productos?uuid_producto=eq.${id}`;
        //alert(path)
        return this.http.get < Task > (path);
    }
    sendMailUsr(usrMail: string) {
        const path = `http://carteraclientes.com/sistema/enviarCorreoRegistroCliente/${usrMail}`;
        return this.http.patch < Task > (path, false);
    }
    //Carrito
    getCarritoActivo(uuid_usuario: string) {
        const path = `${this.api}/carrito_activo?uuid_cliente=eq.${uuid_usuario}`;
        return this.http.get < carrito_activo[] > (path);
    }
    setCarritoActivo(dataUsuario: any) {
        const path = `${this.api}/carrito`;
        return this.http.post(path, dataUsuario);
    }
    getCarritoActivoDetalles(uuid_carrito: string) {
        const path = `${this.api}/carrito_activo_detalles?uuid_carrito=eq.${uuid_carrito}`;
        return this.http.get < carrito_activo_detalles[] > (path);
    }
    setProductoToCarrito(dataCarrito: agregarProductoCarrito) {
        const path = `${this.api}/carrito_detalles`;
        return this.http.post(path, dataCarrito);
    }
    updProductoCarrito(uuid_carrito: string,uuid_producto: string, dataCantidad: any) {
        const path = `${this.api}/carrito_detalles?uuid_carrito=eq.${uuid_carrito}&&uuid_producto=eq.${uuid_producto}`;
        return this.http.patch(path, dataCantidad);
    }
    delProducto(uuid_carrito:string,uuid_producto: string){
        const path = `${this.api}/carrito_detalles?uuid_carrito=eq.${uuid_carrito}&&uuid_producto=eq.${uuid_producto}`;
        return this.http.delete(path);
    }
    getNotificaciones() {
        const path = `${this.api}/notificaciones?uuid_cliente=eq.8e96af95-4575-47e9-a2aa-b56aba2f035f`;
        return this.http.get<Notificaciones[]>(path);
    }
    getNotificacionesNoLeidas() {
        const path = `${this.api}/notificaciones?uuid_cliente=eq.8e96af95-4575-47e9-a2aa-b56aba2f035f&status=eq.0`;
        return this.http.get<Notificaciones[]>(path);
    }
    getDirecciones() {
        const path = `${this.api}/direcciones?uuid_cliente=eq.613d8579-4cab-4b50-a7a6-b9317a07c101`;
        return this.http.get<Notificaciones[]>(path);
    }
    getPerfiles(){
        const path = `${this.api}/clientes?uuid_cliente=eq.613d8579-4cab-4b50-a7a6-b9317a07c101`;
        return this.http.get<Perfiles[]>(path);
    }
    updateDirecciones(task: Notificacion,uuid_cliente:any,uuid:any) {
        // const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/direcciones?uuid_cliente=eq.${uuid_cliente}&uuid_notificacion=eq.${uuid}`
        return this.http.patch<Task>(path,task);
    }
    updateNotificacion(task: Notificacion,uuid_cliente:any,uuid:any) {
        // const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/notificaciones?uuid_cliente=eq.${uuid_cliente}&uuid_notificacion=eq.${uuid}`
        return this.http.patch<Task>(path,task);
    }
    getAllBanners(){
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/banners?status=eq.1`;
        //alert(path)
        return this.http.get<Task>(path);
    }
    getCfdi() {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/uso_cfdi`;
        //alert(path)
        return this.http.get<Task>(path);
    }
    getEstados() {
        //const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/estados`;
        //alert(path)
        return this.http.get<Task>(path);
    }
}