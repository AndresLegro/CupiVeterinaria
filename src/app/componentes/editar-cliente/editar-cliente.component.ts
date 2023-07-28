import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { ServicioClienteService } from 'src/app/servicios/servicio-cliente/servicio-cliente.service';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit
{
  id: any;
  formularioDeClientes:FormGroup;

  constructor(private activateRoute:ActivatedRoute, public formulario: FormBuilder, public citaService: ServicioClienteService, public routeador : Router)
  {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeClientes = this.formulario.group({

      cedula : [''],
      nombreCompleto : [''],
      direccion : [''],
      correo : ['']

    });

    this.citaService.obtenerCliente(this.id).subscribe
    (respuesta => {
      console.log(respuesta);

      this.formularioDeClientes.setValue({
  
        cedula: respuesta[0]['cedula'],
        nombreCompleto: respuesta[0]['nombreCompleto'],
        direccion: respuesta[0]['direccion'],
        correo: respuesta[0]['correo']

      });
    });
  }

  ngOnInit(): void {
    
  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeClientes.value);

    this.citaService.editarCliente( this.id , this.formularioDeClientes.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-cliente');
    });
     
    
  }
}
