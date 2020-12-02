import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
selecCliente:Cliente;
cliente:Cliente[];
readonly ruta ='https://proyectocrisologo.herokuapp.com/api/cliente'

  constructor(private http:HttpClient) { 
    this.selecCliente=new Cliente();

  }

  
  getCliente(){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.get<Cliente>(this.ruta,{headers}).pipe(map(data => {
      return Object.values(data);
    }));
  }
  postCliente(cliente: Cliente){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.post(this.ruta, cliente,{headers});
  }
  
  putCliente(cliente: Cliente){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.put(this.ruta + `/${cliente._id}`, cliente, {headers});
  }
  deleteCliente(_id: string){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.delete(this.ruta +  `/${_id}`, {headers})
  }
}
