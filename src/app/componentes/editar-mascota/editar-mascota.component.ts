import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { ServicioMascotaService } from 'src/app/servicios/servicio-mascota/servicio-mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit
{
  id: any;
  formularioDeMascotas:FormGroup;

  constructor(private activateRoute:ActivatedRoute, public formulario: FormBuilder, public citaService: ServicioMascotaService, public routeador : Router)
  {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeMascotas = this.formulario.group({
      nombre : [''],
      especie : [''],
      raza : [''],
      edad : [''],
      genero : [''],
      peso : ['']

    });

    this.citaService.obtenerMascota(this.id).subscribe
    (respuesta => {
      console.log(respuesta);

      this.formularioDeMascotas.setValue({
  
        nombre: respuesta[0]['nombre'],
        especie: respuesta[0]['especie'],
        raza: respuesta[0]['raza'],
        edad: respuesta[0]['edad'],
        genero: respuesta[0]['genero'],
        peso: respuesta[0]['peso']

      });
    });
  }

  ngOnInit(): void {
    
  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeMascotas.value);

    this.citaService.editarMascota( this.id , this.formularioDeMascotas.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-mascota');
    });
     
    
  }
}
