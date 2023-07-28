import { Component, OnInit } from '@angular/core';
import { ServicioCitaService } from 'src/app/servicios/servicio-cita/servicio-cita.service';


@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})

export class ListarCitaComponent implements OnInit 
{
    citas: any;

    constructor (private citaService : ServicioCitaService)
    {}
      ngOnInit(): void 
      {
        this.citaService.obtenerCitas().subscribe(respuesta =>
          {
            this.citas = respuesta;
          });
      }

      borrarCita(id:any, iControl : any)
      {
        console.log(id, iControl);
        this.citaService.borrarCita(id).subscribe();
        this.citas.splice(iControl , 1 );
      }
    
}
