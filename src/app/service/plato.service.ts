import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plato } from '../models/plato';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  selecPlato:Plato;
  plato:Plato[];
  readonly ruta ='https://proyectocrisologo.herokuapp.com/api/plato'

  constructor(private http:HttpClient) {
    this.selecPlato=new Plato();
   }

  getPlatos(){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.get<Plato>(this.ruta,{headers}).pipe(map(data => {
      return Object.values(data);
    }));
  }
  postPlato(plato: Plato){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.post(this.ruta, plato,{headers});
  }

  putPlato(plato: Plato){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.put(this.ruta + `/${plato._id}`, plato, {headers});
  }

  deletePlato(_id: string){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE0YzBmZmFjNWI2OTI0NjgzZTc5ZDgiLCJpYXQiOjE2MDY4NzkxNzMsImV4cCI6MTYwNjkyMjM3M30.A8yhJCSXPeU2tsIRG8MsolZ2Ly2DrAElF4JOtHnWyIk'
    });
    return this.http.delete(this.ruta +  `/${_id}`, {headers});
  }
}
