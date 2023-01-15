import { Component, OnInit } from '@angular/core';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public goalChartoptions;

  coursCount : number;
  commentCount : number;
  positive : number;
  negative : number;

  searchText : string;

  goalOverview: {
    series: [83],
    analyticsData: {
      completed: '786,617',
      inProgress: '13,561'
    }
  }

  constructor() {

    // Goal Overview  Chart
    this.goalChartoptions = {
      chart: {
        height: 245,
        type: 'radialBar',
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: [this.$goalStrokeColor2],
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: this.$strokeColor,
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: this.$textHeadingColor,
              fontSize: '2.86rem',
              fontWeight: '600'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [colors.solid.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          bottom: 30
        }
      }
    };

  }

  ngOnInit(): void {
    this.coursCount = 20;
    this.commentCount = 100;
    this.positive = 90;
    this.negative = 10;

    this.goalOverview = {
      series: [83],
      analyticsData: {
        completed: '786,617',
        inProgress: '13,561'
      }
    }

    this.getCours();
  }

  coursP : number;
  coursN : number;
  avg : number;
  getCours(){
    this.coursP = 20;
    this.coursN = 6;
    this.avg = this.coursP / (this.coursP + this.coursN);
  }


  private $goalStrokeColor2 = '#51e5a8';
  private $textHeadingColor = '#5e5873';
  private $strokeColor = '#ebe9f1';
  
}

