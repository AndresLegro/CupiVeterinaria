import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { ServicioCitaService } from 'src/app/servicios/servicio-cita/servicio-cita.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})

export class EditarCitaComponent implements OnInit
{
  id: any;
  formularioDeCitas: FormGroup;

  constructor(private activateRoute:ActivatedRoute, public formulario: FormBuilder, public citaService: ServicioCitaService, public routeador : Router)
  {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeCitas = this.formulario.group({
 
      estado : ['']

    });

    this.citaService.obtenerCita(this.id).subscribe
    (respuesta => {
      console.log(respuesta);

      this.formularioDeCitas.setValue({
  
        estado: respuesta[0]['estado']
      });
    });
  }

  ngOnInit(): void {
    
  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeCitas.value);

    this.citaService.editarCita( this.id , this.formularioDeCitas.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-cita');
    });
     
    
  }
}
