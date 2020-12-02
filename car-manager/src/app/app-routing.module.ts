import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'marcas', loadChildren: () => import('./modules/marca/marca.module').then(mod => mod.MarcaModule)
  },
  {
    path: 'veiculos', loadChildren: () => import('./modules/veiculo/veiculo.module').then(mod => mod.VeiculoModule)
  },
  {
    path: 'modelos', loadChildren: () => import('./modules/modelo/modelo.module').then(mod => mod.ModeloModule)
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }