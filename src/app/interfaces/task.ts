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

