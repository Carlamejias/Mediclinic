import { Injectable } from '@angular/core';
// Se importa HttpClient
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Se declara el servicio para consumir el API
export class ServicioService {
 


  constructor(private http:HttpClient) { }
//Se crea la funcion 'getPost' para obtener el metodo POST
  getPosts<T> ( URL : string ){
    URL = 'https://jsonplaceholder.typicode.com/users';
    //Retona el metodo 'this' por medio de 'http' y 'get' para Retornar 'apiULR' 
    return this.http.get<T[]>(URL);
  }   
   
}