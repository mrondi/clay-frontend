import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { FlujoCajaComponent } from './pages/flujo-caja/flujo-caja.component';


const routes: Routes = [
  { 
    path: '', 
    component: DefaultComponent,
    children: [
      { path: '', component: FlujoCajaComponent, pathMatch: 'full'},
    
    ]
  },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
