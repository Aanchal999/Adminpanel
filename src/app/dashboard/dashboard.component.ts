import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart = [];
  constructor() { }
  color1 = 'primary'; 
  value1 = 80;
  bufferValue1 = 75;

  color2 = 'primary'; 
  value2 = 30;
  bufferValue2 = 25;
  ngOnInit(): any {}

/*ngOnInit()  {
  this.chart = new Chart('canvas', {
    type: 'line',
    data: {
      labels: ['a','b','c','d', 'e', 'f', 'g', 'h' ],
      datasets:[
        {
          label:'My first dataset',
          data: [1,3,5,10,56,65,53.567,567,567],
          backgroundColor: 'red',
          borderColor: 'red',
          fill: false,
        },
        {
        label:'My second dataset',
        data: [1,3,5,10,56,65,53.567,567,567].reverse(),
        backgroundColor: 'blue',
        borderColor: 'blue',
        fill: false,
        }
      ]
    }
  })

  }*/






/*  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
 */
}
