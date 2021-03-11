import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'sucursales',
    loadChildren: () => import('./sucursales/sucursales.module').then( m => m.SucursalesPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'ubicaciones',
    loadChildren: () => import('./ubicaciones/ubicaciones.module').then( m => m.UbicacionesPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'sucursalcerca',
    loadChildren: () => import('./sucursalcerca/sucursalcerca.module').then( m => m.SucursalcercaPageModule)
  },
  {
    path: 'paypal-mobile',
    loadChildren: () => import('./paypal-mobile/paypal-mobile.module').then( m => m.PaypalMobilePageModule)
  },
  {
    path: 'sinconexion',
    loadChildren: () => import('./sinconexion/sinconexion.module').then( m => m.SinconexionPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'pagoexitoso',
    loadChildren: () => import('./pagoexitoso/pagoexitoso.module').then( m => m.PagoexitosoPageModule)
  },
  {
    path: 'pagonoexitoso',
    loadChildren: () => import('./pagonoexitoso/pagonoexitoso.module').then( m => m.PagonoexitosoPageModule)
  },
  {
    path: 'agregardireccion',
    loadChildren: () => import('./agregardireccion/agregardireccion.module').then( m => m.AgregardireccionPageModule)
  },
  {
    path: 'registrado',
    loadChildren: () => import('./registrado/registrado.module').then( m => m.RegistradoPageModule)
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'editardireccion',
    loadChildren: () => import('./editardireccion/editardireccion.module').then( m => m.EditardireccionPageModule)
  },
  {
    path: 'historialpedidos',
    loadChildren: () => import('./historialpedidos/historialpedidos.module').then( m => m.HistorialpedidosPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'resultadobusqueda',
    loadChildren: () => import('./resultadobusqueda/resultadobusqueda.module').then( m => m.ResultadobusquedaPageModule)
  },
  {
    path: 'historialdetallepedidos',
    loadChildren: () => import('./historialdetallepedidos/historialdetallepedidos.module').then( m => m.HistorialdetallepedidosPageModule)
  },  {
    path: 'pagopendiente',
    loadChildren: () => import('./pagopendiente/pagopendiente.module').then( m => m.PagopendientePageModule)
  },
  {
    path: 'resultadobusquedavacia',
    loadChildren: () => import('./resultadobusquedavacia/resultadobusquedavacia.module').then( m => m.ResultadobusquedavaciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
