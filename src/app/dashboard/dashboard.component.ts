import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet  } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart = [];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

   //progress bar
  color1 = 'primary'; 
  value1 = 80;
  bufferValue1 = 75;

  color2 = 'primary'; 
  value2 = 30;
  bufferValue2 = 25;


ngOnInit(): any{}

//bar chart
public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

public barChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

//piechart

public pieChartOptions: ChartOptions = {
  responsive: true,
};
public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
public pieChartData: SingleDataSet = [300, 500, 100];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';


}
