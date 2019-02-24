import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencyRates: any;
  rateList: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCurrencyRates().subscribe(rates => {
      this.currencyRates = rates;
      console.log(this.currencyRates);
      this.rateList = Object.keys(this.currencyRates.rates)
        .map(key => ({type: key, value: this.currencyRates.rates[key]}))
        .sort((a, b) => a.type.localeCompare(b.type));
      console.log(this.rateList);
    });
  }

  // myClick(){
  //   this.data.getCurrencyRates().subscribe(rates => {
  //     this.currencyRates = rates;
  //     console.log(this.currencyRates);
  //   });
  // }

}
