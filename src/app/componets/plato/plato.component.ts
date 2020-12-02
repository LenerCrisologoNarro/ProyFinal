import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { PlatoService } from 'src/app/service/plato.service';
import {Plato } from 'src/app/models/plato';
//declare var M: any;
@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css'], 
 // providers:[PlatoService]
  
})
export class PlatoComponent implements OnInit {
platos:any=[];
plato=new Plato();
  constructor( public platoService:PlatoService) {
    this.getPlatos();
   }

  ngOnInit(): void {
  }
  guardarPlato(form: NgForm){
    if(form.value._id){
      this.platoService.putPlato(this.plato)
      .subscribe(res => {
        this.nuevoForm(form);
       // M.toast({html: 'Actualizado satisfactoriamente'});
        this.getPlatos();
      });
    } else{
      this.platoService.postPlato(this.plato)
      .subscribe(res =>{
        this.nuevoForm(form);
      //  M.toast({html: 'Guardado satisfactoriamente'});
        this.getPlatos();
      });
    }  
    form.reset();
  }
  getPlatos() {
    this.platoService.getPlatos().subscribe(data => {
      this.platos = data[1];

      console.log(data);
    });
    
    
  }

  editplato(plato: Plato){
    this.plato=plato;
  }



  deletePlato(platomodelo:Plato){
    if(confirm('¿Estas seguro de eliminar este Plato?')){
      this.platoService.deletePlato(platomodelo._id)
      .subscribe(res => {
      //  M.toast({html: 'plato eliminado satisfactoriamente'});
        this.getPlatos();
        
    });
    }
  }

  nuevoForm(form? : NgForm){
    if(form){
      form.reset();
      this.platoService.selecPlato = new Plato();
    }
  }



}
