export interface Task {
  nombre: string;
  nombre_2: string;
  telefono: string;
  celular: string;
  mail: string;
  persona_contacto: string;
  sucursal: string;
  tipo_empresa: string;
  rfc: string;
  persona_fisica: string;
  password: string;
  status: string;
  uso_cfdi: string;
}
export interface Sucursal {
  sucursal: string;
  direccion: string;
  telefono: string;
  telefono2: string;
  correo: string;
  coordenadas: string;
  enlaceMaps: string;
}
export interface Login {
  mail: string;
  contrasena: string;
}
export interface productos {
  uuid_producto: string;
  producto_id: string;
  no_parte: string;
  marca: string;
  nombre: string;
  desc_corta: string;
  desc_larga: string;
  status: string;
  visible: string;
  nuevo: string;
  promocion: string;
  destacado: string;
  um: string;
  tasa_iva: string;
  grupo_accesorios_id: string;
  grupo_relacionados_id: string;
  nom_img1: string;
  url_img1: string;
  nom_img2: string;
  url_img2: string;
  nom_img3: string;
  url_img3: string;
  nom_img4: string;
  url_img4: string;
  nom_img5: string;
  url_img5: string;
}
export interface producto {
  uuid_producto: string;
  producto_id: string;
  no_parte: string;
  marca: string;
  nombre: string;
  desc_corta: string;
  desc_larga: string;
  status: string;
  visible: string;
  nuevo: string;
  promocion: string;
  destacado: string;
  um: string;
  tasa_iva: string;
  grupo_accesorios_id: string;
  grupo_relacionados_id: string;
  nom_img1: string;
  url_img1: string;
  nom_img2: string;
  url_img2: string;
  nom_img3: string;
  url_img3: string;
  nom_img4: string;
  url_img4: string;
  nom_img5: string;
  url_img5: string;
}

export interface productoCarrito{
    uuid_producto: string;
    cantidad:number;
}
export interface agregarProductoCarrito{
    uuid_carrito: string;
    uuid_producto: string;
    cantidad:number;
}
export interface carrito_activo_detalles{
    uuid_cliente: string;
    uuid_carrito: string;
    modificacion: string;
    creacion: string;
    uuid_producto: string;
    cantidad: number;
    precio: number;
}
export interface uuid_usuario{
    uuid_cliente:string;
}
export interface carrito_activo{
    uuid_carrito: string;
    uuid_cliente:string;
    cantidad:number;

export interface Notificaciones {
  uuid: string;
  uuid_cliente: string;
  titulo: string;
  fecha: string;
  descripcion: string;
  url_imagen: string;
  icono: string;
  status: string;
}
export interface Notificacion {
  status: string;
}
export interface Perfiles {
  uuid_cliente: string;
  id_cliente_sap: string;
  nombre: string;
  nombre_2: string;
  telefono: string;
  celular: string;
  mail: string;
  persona_contacto: string;
  sucursal: string;
  tipo_empresa: string;
  lista_precio_id: string,
  facturacion: string,
  rfc: string,
  persona_fisica: string,
  uso_cfdi: string,
  password: string,
  status: string
}