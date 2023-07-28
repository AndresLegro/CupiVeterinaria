import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCitaComponent } from './componentes/agregar-cita/agregar-cita.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarMascotaComponent } from './componentes/agregar-mascota/agregar-mascota.component';
import { ListarMascotaComponent } from './componentes/listar-mascota/listar-mascota.component';
import { EditarMascotaComponent } from './componentes/editar-mascota/editar-mascota.component';
import { ListarCitaComponent } from './componentes/listar-cita/listar-cita.component';
import { EditarCitaComponent } from './componentes/editar-cita/editar-cita.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listar-cita'},
  {path: 'agregar-cita' , component: AgregarCitaComponent},
  {path: 'editar-cita/:id' , component: EditarCitaComponent},
  {path: 'listar-cita' , component: ListarCitaComponent},
  {path: 'agregar-cliente' , component: AgregarClienteComponent},
  {path: 'editar-cliente/:id' , component: EditarClienteComponent},
  {path: 'listar-cliente' , component: ListarClienteComponent},
  {path: 'agregar-mascota' , component: AgregarMascotaComponent},
  {path: 'editar-mascota/:id' , component: EditarMascotaComponent},
  {path: 'listar-mascota' , component: ListarMascotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
