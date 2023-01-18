import { Component, OnInit } from '@angular/core';
import { Cours } from 'app/main/e_learning/model/cours';
import { CoursService } from 'app/main/e_learning/service/cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss']
})
export class CoursListComponent implements OnInit {

  public courses : Cours[];
  public searchText : string;
  
  constructor( private coursService :CoursService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.coursService.getCourses(1).subscribe({
      next: (data: any) => {
        this.courses = data;
      },
      error:(err) => {
          console.log(err);
      },
    })
  }

  getByTitle(){
    if(this.searchText != ""){
      this.coursService.getByTitle(this.searchText).subscribe(
        {
          next: (data: any) => {
            this.courses = data;
          },
          error:(err) => {
              console.log(err);
          },
        }
      )
    }
    else
      this.getCourses();
  }
}
