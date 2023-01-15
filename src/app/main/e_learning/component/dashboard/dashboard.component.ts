import { Component, OnInit } from '@angular/core';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  coursCount : number;
  commentCount : number;
  positive : number;
  negative : number;

  searchText : string;

  constructor() {

  }

  ngOnInit(): void {
    this.coursCount = 20;
    this.commentCount = 100;
    this.positive = 90;
    this.negative = 10;


    this.getCours();
  }

  coursP : number;
  coursN : number;
  avgP : number = 50;
  avgN : number;
  total : number;
  getCours(){
    this.coursP = 20;
    this.coursN = 6;
    this.total = this.coursN + this.coursP;
    this.avgP = (this.coursP / this.total) * 100;
    this.avgN = (this.coursN / this.total) * 100;
  }

  
}

