import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from './Cita';

@Injectable({
  providedIn: 'root'
})
export class ServicioCitaService 
{
  API : string  = "http://localhost/xampp/MVCAprendiz/data/cita.php"
  APIMascota : string  = "http://localhost/xampp/MVCAprendiz/data/mascota.php"
  APICliente : string  = "http://localhost/xampp/MVCAprendiz/data/cliente.php"

  constructor(private clienteHttp : HttpClient) { }

    agregarCita(datosCita : Cita) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?insertar=1" , datosCita);
    }

    obtenerCitas ()
    {
      return this.clienteHttp.get(this.API);
    }

    obtenerClientes ()
    {
      return this.clienteHttp.get(this.APICliente);
    }
    
    obtenerMascotas ()
    {
      return this.clienteHttp.get(this.APIMascota);
    }

    borrarCita (id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?borrar=" + id);
    }
   
    obtenerCita(id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?consultar=" + id);
    }

    editarCita(id : any, datosCita : Cita) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?actualizar=" + id , datosCita);
    }
}
