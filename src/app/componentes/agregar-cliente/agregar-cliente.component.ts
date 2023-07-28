import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioClienteService } from 'src/app/servicios/servicio-cliente/servicio-cliente.service';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit
{
  formularioDeClientes:FormGroup;

  constructor(public formulario : FormBuilder ,public citaService : ServicioClienteService, public routeador : Router)
  {
    this.formularioDeClientes = this.formulario.group({
      cedula : [''],
      nombreCompleto : [''],
      direccion : [''],
      correo : [''],

    });
  }

  
  ngOnInit(): void {
    
  }

  enviarDatos(): void {
    console.log("Click en enviar");
    console.log(this.formularioDeClientes.value);
    this.citaService.agregarCliente(this.formularioDeClientes.value).subscribe(
      (response) => {
        // La mascota se ha agregado correctamente, puedes mostrar un mensaje de éxito o redireccionar a otra página.
        console.log('Mascota agregada con éxito:', response);
        this.routeador.navigateByUrl('/listar-cliente');
      },
      (error) => {
        // Si hay un error al agregar la mascota, puedes mostrar un mensaje de error.
        console.error('Error al agregar el cliente:', error);
      }
    );
  }
}
