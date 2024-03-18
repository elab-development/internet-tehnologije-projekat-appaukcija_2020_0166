import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";
import { Bid } from '../models/bid';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrl: './chart-page.component.css'
})
export class ChartPageComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  bids!: Bid[];
  constructor(private activatedRoute: ActivatedRoute) {


  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.bids = data['bidsData'];
      const dates: string[] = this.bids.map(bid => new Date(bid.created_at).toLocaleDateString());
      console.log(dates);
      const uniqueDates: string[] = Array.from(new Set(dates));
      console.log(uniqueDates);
      const dataPoints = uniqueDates.map(date => {
        return {
          x: date,
          y: dates.filter(d => d === date).length
        };
        
      });
      console.log(dataPoints);
      this.chartOptions = {
        series: [
          {
            name: "Bids",
            data: dataPoints
          }
        ],
        chart: {
          height: 350,
          type: "line"
        },
        stroke: {
          width: 7,
          curve: "smooth"
        },
     
        title: {
          text: "Bids per Day",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#667"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,

          }
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        yaxis: {
          min: 0,
          max: 10,
          title: {
            text: "Bids"
          }
        }
      };
    })
  }
}
