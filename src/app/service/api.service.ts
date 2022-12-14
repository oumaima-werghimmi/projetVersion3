import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Marque } from '../marque';

const URL=" http://localhost:3000/voiture";
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  lamarque!:Marque;
  constructor(private http:HttpClient) { }
  getProduct():Observable<Marque[]>{
    return this.http.get<Marque[]>(URL)
   
    }
    getVoitureByid(id :number):Observable<Marque> {
      return  this.http.get<Marque>(URL + '/'+ id);
     }
    
  }
