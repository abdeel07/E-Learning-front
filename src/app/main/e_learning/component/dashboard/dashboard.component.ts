import { Component, OnInit } from '@angular/core';
import { colors } from 'app/colors.const';
import { CommentService } from '../../service/comment.service';
import { CoursService } from '../../service/cours.service';

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

  searchID : string;

  constructor(
    private commentService: CommentService,
    private coursService: CoursService
  ) {  }

  ngOnInit(): void {
    this.getCoursCount();
    this.getCommentsCount();
    this.getCommentsP();
    this.getCommentsN();

    this.getCours();
  }

  coursP : number;
  coursN : number;
  avgP : number;
  avgN : number;
  total : number;
  getCours(){

    if(this.searchID != ""){
      this.getCoursN();
      this.getCoursP();

      this.total = this.coursN + this.coursP;
      this.avgP = (this.coursP / this.total) * 100;
      this.avgN = (this.coursN / this.total) * 100;
    }
    else {
      this.avgP = 0;
      this.avgN = 0;
    }
  }

  getCoursCount(){
    this.coursService.getCount().subscribe(
      {
        next: (response) => {
          this.coursCount = response;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  getCommentsCount(){
    this.commentService.getCount().subscribe(
      {
        next: (response) => {
          this.commentCount = response;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  getCommentsP(){
    this.commentService.getPositive().subscribe(
      {
        next: (response) => {
          this.positive = response;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  getCommentsN(){
    this.commentService.getNegative().subscribe(
      {
        next: (response) => {
          this.negative = response;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  getCoursP(){
    this.commentService.getCoursP(Number(this.searchID)).subscribe(
      {
        next: (response) => {
          this.coursP = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  getCoursN(){
    this.commentService.getCoursN(Number(this.searchID)).subscribe(
      {
        next: (response) => {
          this.coursN = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }
}

