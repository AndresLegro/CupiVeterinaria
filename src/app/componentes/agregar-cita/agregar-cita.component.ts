import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCitaService } from 'src/app/servicios/servicio-cita/servicio-cita.service';
@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit 
{

  formularioDeCitas:FormGroup;
  mascotas : any;
  clientes : any;

  constructor(public formulario : FormBuilder ,public citaService : ServicioCitaService, public routeador : Router)
  {
    this.formularioDeCitas = this.formulario.group({
      fecha : [''],
      hora : [''],
      tipo : [''],
      doctor : [''],
      motivo : [''],
      idMascota : [''],
      idCliente: [''],
      sintomas : ['']
     
    });

    this.citaService.obtenerMascotas().subscribe(respuesta => {
      this.mascotas = respuesta;
    });

    this.citaService.obtenerClientes().subscribe(respuesta => {
      this.clientes = respuesta;
    });
  }

  
  ngOnInit(): void {
    
  }

  enviarDatos(): void {
    console.log("Click en enviar");
    console.log(this.formularioDeCitas.value);
    this.citaService.agregarCita(this.formularioDeCitas.value).subscribe(
      (response) => {
        // La mascota se ha agregado correctamente, puedes mostrar un mensaje de éxito o redireccionar a otra página.
        console.log('Mascota agregada con éxito:', response);
        this.routeador.navigateByUrl('/listar-cita');
      },
      (error) => {
        // Si hay un error al agregar la mascota, puedes mostrar un mensaje de error.
        console.error('Error al agregar la cita:', error);
      }
    );
  }
}
