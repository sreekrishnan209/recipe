import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiFetchingService {

  server_url="https://dummyjson.com/recipes"

  constructor(private http:HttpClient) { }

  viewApi(){
    return this.http.get(`${this.server_url}`)
  }

  
  
}
