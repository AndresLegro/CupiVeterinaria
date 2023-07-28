import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioMascotaService } from 'src/app/servicios/servicio-mascota/servicio-mascota.service';


@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit
{

  formularioDeMascotas:FormGroup;

  constructor(public formulario : FormBuilder ,public citaService : ServicioMascotaService, public routeador : Router)
  {
    this.formularioDeMascotas = this.formulario.group({
      nombre : [''],
      especie : [''],
      raza : [''],
      edad : [''],
      genero : [''],
      peso : [''],


    });
  }

  
  ngOnInit(): void {
    
  }

  enviarDatos(): void {
    console.log("Click en enviar");
    console.log(this.formularioDeMascotas.value);
    this.citaService.agregarMascota(this.formularioDeMascotas.value).subscribe(
      (response) => {
        // La mascota se ha agregado correctamente, puedes mostrar un mensaje de éxito o redireccionar a otra página.
        console.log('Mascota agregada con éxito:', response);
        this.routeador.navigateByUrl('/listar-mascota');
      },
      (error) => {
        // Si hay un error al agregar la mascota, puedes mostrar un mensaje de error.
        console.error('Error al agregar la mascota:', error);
      }
    );
  }
  
}
