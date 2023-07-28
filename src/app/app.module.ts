
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCitaComponent } from './componentes/listar-cita/listar-cita.component';
import { EditarCitaComponent } from './componentes/editar-cita/editar-cita.component';
import { AgregarCitaComponent } from './componentes/agregar-cita/agregar-cita.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarMascotaComponent } from './componentes/agregar-mascota/agregar-mascota.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { EditarMascotaComponent } from './componentes/editar-mascota/editar-mascota.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { ListarMascotaComponent } from './componentes/listar-mascota/listar-mascota.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarCitaComponent,
    EditarCitaComponent,
    AgregarCitaComponent,
    AgregarMascotaComponent,
    ListarMascotaComponent,
    EditarMascotaComponent,
    AgregarClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
