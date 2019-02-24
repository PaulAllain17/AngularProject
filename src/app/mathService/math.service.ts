import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  computeExchangeRate(newCurrency: number, currentCurrency: number){
    return newCurrency / currentCurrency;
  }
}
