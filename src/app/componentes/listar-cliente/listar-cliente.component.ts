import { Component, OnInit } from '@angular/core';
import { ServicioClienteService } from 'src/app/servicios/servicio-cliente/servicio-cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit 
{

  clientes: any;

    constructor (private clienteService : ServicioClienteService)
    {}
      ngOnInit(): void 
      {
        this.clienteService.obtenerClientes().subscribe(respuesta =>
          {
            this.clientes = respuesta;
          });
      }

      borrarCliente(id:any, iControl : any)
      {
        console.log(id, iControl);
        this.clienteService.borrarCliente(id).subscribe();
        this.clientes.splice(iControl , 1 );
      }
    
}
