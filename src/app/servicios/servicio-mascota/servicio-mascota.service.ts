import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from './Mascota';


@Injectable({
  providedIn: 'root'
})
export class ServicioMascotaService {

  API : string  = "http://localhost/xampp/MVCAprendiz/data/mascota.php"

  constructor(private clienteHttp : HttpClient) { }

   agregarMascota(datosMascota : Mascota) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?insertar=1" , datosMascota);
    }

    obtenerMascotas ()
    {
      return this.clienteHttp.get(this.API);
    }

    borrarMascota (id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?borrar=" + id);
    }
   
    obtenerMascota(id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?consultar=" + id);
    }

    editarMascota(id : any, datosMascota : Mascota) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?actualizar=" + id , datosMascota);
    }
}

