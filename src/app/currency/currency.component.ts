import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService/data.service';
import { MathService } from '../mathService/math.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencyRates: any;
  rateList: any;
  currentCurrency: number;
  newCurrency: number;
  exchangeRate: number;

  constructor(private data: DataService, private math: MathService) { }

  ngOnInit() {
    this.data.getCurrencyRates().subscribe(rates => {
      this.currencyRates = rates;
      this.rateList = Object.keys(this.currencyRates.rates)
        .map(key => ({type: key, value: this.currencyRates.rates[key]}))
        .sort((a, b) => a.type.localeCompare(b.type));
      this.currentCurrency = this.rateList[0].value;
      this.newCurrency = this.rateList[0].value;
      this.exchangeRate = 1;
    });
  }

  currentCurrencyChangeEvent(newCurrentCurrency){
    this.currentCurrency = newCurrentCurrency;
    this.exchangeRate = this.math.computeExchangeRate(this.newCurrency, this.currentCurrency);
  }

  newCurrencyChangeEvent(newNewCurrency){
    this.newCurrency = newNewCurrency;
    this.exchangeRate = this.math.computeExchangeRate(this.newCurrency, this.currentCurrency);
  }
}
