import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurrencyRates(){
    return this.http.get('https://api.exchangeratesapi.io/latest?base=USD');
  }
}
