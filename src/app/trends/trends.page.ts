import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.page.html',
  styleUrls: ['./trends.page.scss'],
})
export class TrendsPage implements OnInit {

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Water', 'Lunch', 'Break', 'Meeting'],
        datasets: [{
          label: 'Activities',
          data: [2.5, 3.8, 5, 6.9],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
