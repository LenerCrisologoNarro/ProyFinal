import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
//declare var M: any;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']  //providers:[ClienteService]
})
export class ClienteComponent implements OnInit {
  clientes: any[];
  cliente = new Cliente();

  constructor(public clienteService: ClienteService) {
    this.getClientes();

  }


  ngOnInit(): void {
  }


  addcliente(form: NgForm) {


    if (form.value._id) {
      this.clienteService.putCliente(this.cliente)
        .subscribe(res => {
          this.nuevoForm(form);
          //    M.toast({html: 'Actualizado satisfactoriamente'});
          this.getClientes();
          console.log(res);

        });
      console.log(this.cliente);
    } else {
      this.clienteService.postCliente(this.cliente)
        .subscribe(res => {
          this.nuevoForm(form);
          //  M.toast({html: 'Guardado satisfactoriamente'});
          this.getClientes();
        });
      console.log(form.value.id);
    }
    form.reset();
  }

  getClientes() {
    this.clienteService.getCliente().subscribe(data => {
      this.clientes = data[1];
      console.log(data);
    });

  }
  editCliente(cliente: Cliente) {
    this.cliente = cliente;
  }

  deleteCliente(_id: string) {
    if (confirm('¿Estas seguro de eliminar este cliente?')) {
      this.clienteService.deleteCliente(_id)
        .subscribe(data => {
          //   M.toast({html: 'cliente eliminado satisfactoriamente'});
          //this.getClientes();
          console.log(data);
        });
    }
  }
  nuevoForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clienteService.selecCliente = new Cliente();
    }
  }

}
