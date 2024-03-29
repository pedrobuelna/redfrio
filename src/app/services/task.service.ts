import {
    Injectable
} from '@angular/core';
import {
    HttpClient,HttpHeaders
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
import {
    LoaderService
} from '../services/loader.service';
import { uuid_usuario } from '../interfaces/task';
@Injectable({
    providedIn: 'root'
})

export class TaskService {
    //Operativo
    // private api = 'https://app.reacsa.mx:3001';
    // private apiMail = 'https://app.reacsa.mx';
    // private apiSAP = 'https://app.reacsa.mx:3003';

    //Pruebas
    private api='https://qas.reacsa.mx:3001';
    private apiMail = 'https://qas.reacsa.mx';
    private apiSAP='https://qas.reacsa.mx:3003';
    
    constructor(
        private http: HttpClient,
        private loader: LoaderService,
    ) {

    }
    getCoverturaEnvios(cp:any){
        const path = `${this.api}/cobertura_envios?cp=eq.${cp}`;
        return this.http.get < any > (path);
    }
    getAllTasks() {
        const path = `${this.api}/sucursales?order=nombre&status=eq.N`;
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
        const path = `${this.api}/busqueda?producto=plfts.*${consultaBusqueda}*`;
        //const path = `${this.api}/rpc/busqueda?producto=fts.*${consultaBusqueda}*&select=${uuid_producto}`;
        return this.http.get <any>(path);
    }
    getBusquedaProductosLike(consultaBusqueda) {
        const path = `${this.api}/busqueda?producto=like.*${consultaBusqueda}*`;
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
    getTokenBraintree() {
        const path = `${this.api}/clientes?uuid_cliente=eq`;
        return this.http.get<any>(path);
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
    getCantidadProducto(uuid_producto: string) {
        const path = `${this.api}/productos_info?uuid_producto=eq.${uuid_producto}&select=cantidad`;
        return this.http.get<any>(path);
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
        const path = `${this.api}/notificaciones_detalles?uuid_cliente=eq.${uuid_cliente}&uuid_notificacion=eq.${uuid}`
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
    getRegimenes() {
        const path = `${this.api}/regimen_fiscal`;
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
    sendMailRecuperarPwd(email:string){
        const path = `${this.apiMail}/restapi/sendMailActualizarPwd/${email}`;
        return this.http.get < Task > (path);
    }
    getSucursales(){
        const path = `${this.api}/sucursales?order=nombre&status=eq.N`;
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
        //this.loader.showLoaderMsg("Cargando..");
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
        //this.loader.hideLoader();
    }
    getInventarioSucursal(datos:any) {
        const path = `${this.apiSAP}/inventario_sucursal`;
        return this.http.post<any>(path, datos);
    }
    getInventarioDomicilio(datos:any) {
        const path = `${this.apiSAP}/inventario`;
        return this.http.post<any>(path, datos);
    }
    callMp(){
        let postData = 
        {
            "items": [
                {
                    "title": "Mi producto",
                    "quantity": 1,
                    "unit_price": 75.76
                }
            ],
            "back_urls": {
                "success": "/home",
                "failure": "/carrito",
                "pending": "/sucursales"
            },
            "auto_return": "approved",
        };
        const headers = new HttpHeaders({
            "Authorization":"Bearer TEST-2911076993776931-012717-e1076c951bf583a0ca2fddd6044de370-653952398",
            "cache-control": "no-cache",
            "Content-Type":"application/json"
        }); 
        this.http.post("https://api.mercadopago.com/checkout/preferences", postData, { headers: headers })
        .subscribe(data => {
            console.log('==========INFO MP==========');
            console.log(data);
            // $('#scriptMp').html('<script src="https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js" data-preference-id="'+data.id+'"></script>');
            return data;
        }, error => {
            console.log(error);
        });
    }
    generarNotificacion(titulo:string,descripcion:string,uuid_cliente:any){
        let created_by:'39e048de-1422-4dc0-8851-71bf89208672'
        let datos={
            titulo,
            fecha:"",
            descripcion,
            created_by
        }
        this.setNotificacion(datos).subscribe(()=>{
            this.getUltimaNotificacion(created_by).subscribe(uuid_notificacion=>{
                let d={
                    uuid_notificacion,
                    uuid_cliente
                }
                this.setNotificacionUsuario(d).subscribe(()=>{

                })  
            })
        });
    }
    setNotificacion(datos){
        const path = `${this.api}/notificaciones`;
        return this.http.post<any>(path, datos);
    }
    getUltimaNotificacion(created_by:string){
        const path = `${this.api}/notificaciones?created_by=eq.${created_by}&order=creacion.desc?limit=1`;
        return this.http.get<any>(path);
    }
    setNotificacionUsuario(datos){
        const path = `${this.api}/notificaciones_detalles`;
        return this.http.post<any>(path, datos);
    }
    patchListaPrecios(uuid_carrito: string) {
        let data={
            'uuidcarrito':uuid_carrito
        }
        const path = `${this.api}/rpc/actualizarPrecios`;
        return this.http.patch<any>(path,data);
        
    }
    getSaldoCliente(uuid_cliente:any){
        const path = `${this.api}/clientes?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get < any > (path);
    }
    setTokenId(data:any) {
        const path = `${this.api}/rpc/setpushid`;
        return this.http.post<any>(path, data);
        
    }
    getCp(cp:any) {
        const path = `${this.api}/codigo_postal?cp=eq.${cp}`;
        return this.http.get < any[] > (path);
    }
    getDatosCliente(uuid_cliente:string){
        const path = `${this.api}/clientes?uuid_cliente=eq.${uuid_cliente}`;
        return this.http.get<Task>(path);
    }
}