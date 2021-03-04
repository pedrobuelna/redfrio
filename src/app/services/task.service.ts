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
    private api = 'https://app.reacsa.mx:3001';
    private apiMail = 'https://app.reacsa.mx';
    constructor(
        private http: HttpClient
    ) {

    }
    getAllTasks() {
        const path = `${this.api}/sucursales`;
        return this.http.get < Sucursal[] > (path);
    }
    validarCorreo(email: string) {
        const path = `${this.api}/clientes?mail=eq.${email}`;
        return this.http.get < any > (path);
    }
    
    getHistorialPedidos(uuid_cliente: any) {
        const path = `${this.api}/historial_pedido?order=fecha_pedido.desc&cliente=eq.${uuid_cliente}`;
        return this.http.get < any > (path);
    }
    getDetallePedidos(id_carrito: any) {
        const path = `${this.api}/historial_pedido_detalle?uuid_carrito=eq.${id_carrito}`;
        return this.http.get<any>(path);
    }
    createTask(task: Task) {
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
    deleteDireccion(uuid_direccion: string) {
        // const path = `${this.api}/todos/${id}`;
        const path = `${this.api}/direcciones?uuid_direccion=eq.${uuid_direccion}`
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
    getProductosDestadados(listaPrecio:any) {
        // const path = `${this.api}/productos_destacados`;
        // return this.http.get < Task > (path);
        const path = `${this.api}/rpc/productosdestacado`;
        return this.http.post<any>(path, listaPrecio);
    }
    getAllProductos(listaPrecio:any) {
        //const path = `${this.api}/productos_info`;
        //return this.http.get < Task > (path);
        const path = `${this.api}/rpc/productoinfo`;
        return this.http.post<any>(path, listaPrecio);
    }
    // getProductos(id) {
    //     //const path = `${this.api}/todos/${id}`;
    //     const path = `${this.api}/productos?familia_id=eq.${id}`;
    //     //alert(path)
    //     return this.http.get < Task > (path);
    // }
    getBusquedaProductos(consultaBusqueda) {
        const path = `${this.api}/busqueda?producto=fts.*${consultaBusqueda}*`;
        //const path = `${this.api}/rpc/busqueda?producto=fts.*${consultaBusqueda}*&select=${uuid_producto}`;
        return this.http.get <any>(path);
    }
    getProductos(id,ordenarpor,listaPrecio:any) {
        // const path = `${this.api}/productos_info?familia_id=eq.${id}${ordenarpor}`;
        // return this.http.get<Task>(path);
        const path = `${this.api}/rpc/productoinfo?familia_id=eq.${id}${ordenarpor}`;
        return this.http.post<any>(path, listaPrecio);
    }
    getProducto(id: any,listaPrecio:any) {
        // const path = `${this.api}/productos_info?uuid_producto=eq.${id}`;
        // return this.http.get < any > (path);
        const path = `${this.api}/rpc/productoinfo?uuid_producto=eq.${id}`;
        return this.http.post<any>(path, listaPrecio);
    }
    updInfoPerfil(uuid_cliente, dataPerfil: any) {
        const path = `${this.api}/clientes?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.patch(path, dataPerfil);
    }
    updateContrasena(mail, dataPerfil: any) {
        const path = `${this.api}/clientes?mail=eq.${mail}`;
        return this.http.patch(path, dataPerfil);
    }
    //Carrito
    updCarritoInfo(uuid_carrito: string, dataStatus: any) {
        const path = `${this.api}/carrito?uuid_carrito=eq.${uuid_carrito}`;
        return this.http.patch(path, dataStatus);
    }
    getCarritoActivo(uuid_usuario: string) {
        const path = `${this.api}/carrito_activo?uuid_cliente=eq.${uuid_usuario}`;
        return this.http.get < carrito_activo[] > (path);
    }
    setCarritoActivo(dataUsuario: any) {
        const path = `${this.api}/carrito`;
        return this.http.post(path, dataUsuario);
    }
    getCarritoActivoDetalles(uuid_carrito: string,listaPrecio:any) {
        //const path = `${this.api}/carrito_activo_detalles?uuid_carrito=eq.${uuid_carrito}`;
        //return this.http.get < carrito_activo_detalles[] > (path);
        const path = `${this.api}/rpc/carritoactivodetalles?uuid_carrito=eq.${uuid_carrito}`;
        return this.http.post<any>(path, listaPrecio);
        
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
    getNotificacionesModal(uuid_cliente:string) {
        const path = `${this.api}/notificaciones_clientes?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get<Notificaciones[]>(path);
    }
    getNotificacionesNoLeidas(uuid_cliente:string) {
        const path = `${this.api}/notificaciones_clientes?status=eq.0&&uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get<Notificaciones[]>(path);
    }
    getNotificaciones(uuid_cliente:string) {
        const path = `${this.api}/notificaciones_clientes?status=eq.1&&uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get<Notificaciones[]>(path);
    }
    getDirecciones() {
        const path = `${this.api}/direcciones?uuid_cliente=eq.613d8579-4cab-4b50-a7a6-b9317a07c101`;
        return this.http.get<Notificaciones[]>(path);
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
    getPerfiles(uuid_cliente:string){
        const path = `${this.api}/clientes?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get<Perfiles[]>(path);
    }
    getPerfilCliente(uuid_cliente:string){
        const path = `${this.api}/clientes?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get<Task[]>(path);
    }
    getPrecioEnvio(uuid_carrito:string){
        const path = `${this.api}/peso_carrito?uuid_carrito=eq.${uuid_carrito}`;
        return this.http.get<any>(path);
    }
    sendMailActivacionUsuario(email:string){
        const path = `${this.apiMail}/restapi/enviarCorreoRegistroCliente/${email}`;
        return this.http.get < Task > (path);
    }
    sendMailPagoExitoso(uuid_carrito:string){
        const path = `${this.apiMail}/restapi/enviarCorreoPagoExitoso/${uuid_carrito}`;
        return this.http.get < Task > (path);
    }
    getSucursales(){
        const path = `${this.api}/sucursales?status=eq.N`;
        return this.http.get < Task > (path);
    }
    //Direcciones
    getDireccionCliente(uuid_cliente){
        const path = `${this.api}/direcciones?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get < any > (path);
    }
    getDireccionClienteSolo(uuid_direccion){
        const path = `${this.api}/direcciones?uuid_direccion=eq.${uuid_direccion}`;
        return this.http.get < any > (path);
    }
    postDirecciones(dataDireccion){
        const path = `${this.api}/direcciones`;
        return this.http.post(path, dataDireccion);
    }
    patchDirecciones(uuid_direccion:string,patchData:any){
        const path = `${this.api}/direcciones?uuid_direccion=eq.${uuid_direccion}`
        return this.http.patch<Task>(path,patchData);
    }
    getSucursalesZonas(){
        const path = `${this.api}/sucursales_zonas`
        return this.http.get<any>(path);
    }
    getDisponibilidadProducto(uuid_producto:string,zona:string){
        const path = `${this.api}/productos_inventario?uuid_producto=eq.${uuid_producto}&&zona=eq.${zona}`
        return this.http.get<any>(path);
    }
    //validaciones imagenes
    validarImg(url) {
        return new Promise(function(resolve, reject) {
        var timeout = 2000;//5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function() {
            clearTimeout(timer);
            reject("error");
        };
        img.onload = function() {
            clearTimeout(timer);
            resolve("success");
        };
        timer = setTimeout(function() {
            // reset .src to invalid URL so it stops previous
            // loading, but doens't trigger new load
            img.src = "//!!!!/noexist.jpg";
            reject("timeout");
        }, timeout); 
        img.src = url;
        });
    }
}