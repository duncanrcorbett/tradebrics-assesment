import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [

  { path: '',
    redirectTo: 'register',
    pathMatch: 'full'},
  {path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
