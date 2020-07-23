import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions ={};
  constructor() {
    

   }

  ngOnInit(): void {
    this.chartOptions= {
    chart: {
      type: 'area'
  },
  title: {
      text: 'Area chart with negative values'
  },
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
  }]
};

  }

}

