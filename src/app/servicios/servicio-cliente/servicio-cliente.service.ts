import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  API : string  = "http://localhost/xampp/MVCAprendiz/data/cliente.php"

  constructor(private clienteHttp : HttpClient) { }

   agregarCliente(datosCliente : Cliente) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?insertar=1" , datosCliente);
    }

    obtenerClientes ()
    {
      return this.clienteHttp.get(this.API);
    }

    borrarCliente (id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?borrar=" + id);
    }
   
    obtenerCliente(id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?consultar=" + id);
    }

    editarCliente(id : any, datosCliente : Cliente) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?actualizar=" + id , datosCliente);
    }
}
