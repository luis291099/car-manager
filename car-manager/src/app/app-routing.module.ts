import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'marcas', loadChildren: () => import('./modules/marca/marca.module').then(mod => mod.MarcaModule)
  },
  {
    path: 'carros', loadChildren: () => import('./modules/carros/carros.module').then(mod => mod.CarrosModule)
  },
  {
    path: 'modelos', loadChildren: () => import('./modules/modelo/modelo.module').then(mod => mod.ModeloModule)
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
