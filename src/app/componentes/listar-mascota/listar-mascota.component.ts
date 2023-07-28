import { Component, OnInit } from '@angular/core';
import { ServicioMascotaService } from 'src/app/servicios/servicio-mascota/servicio-mascota.service';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})
export class ListarMascotaComponent implements OnInit
{
  mascotas: any;

    constructor (private clienteService : ServicioMascotaService)
    {}
      ngOnInit(): void 
      {
        this.clienteService.obtenerMascotas().subscribe(respuesta =>
          {
            this.mascotas = respuesta;
          });
      }

      borrarMascota(id:any, iControl : any)
      {
        console.log(id, iControl);
        this.clienteService.borrarMascota(id).subscribe();
        this.mascotas.splice(iControl , 1 );
      }
}
