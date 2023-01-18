import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Category } from 'app/main/e_learning/model/category';
import { Cours } from 'app/main/e_learning/model/cours';
import { Skill } from 'app/main/e_learning/model/skill';
import { CategoryService } from 'app/main/e_learning/service/category.service';
import { CoursService } from 'app/main/e_learning/service/cours.service';
import { SkillService } from 'app/main/e_learning/service/skill.service';
import { repeaterAnimation } from './cours-add.animation';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrls: ['./cours-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [repeaterAnimation]
})
export class CoursAddComponent implements OnInit {

  cours?: Cours = {
    id: 0,
    title: "",
    categoryId: 0,
    skills : [],
    comments: [],
    description: "",
    img: ""
  };
  skills: Skill[];
  categories : Category[];
  
  constructor(
    private coursService : CoursService,
    private skillService : SkillService,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.getSkills();
    this.getCategories();
  }

  getSkills(){
    this.skillService.getSkills().subscribe(
      {
        next: (response: any) => {
          this.skills = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      {
        next: (response: any) => {
          this.categories = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  uploadImage($event: any) {

  }

  onSubmit(){
    console.error(this.cours);
    this.coursService.addCourse(this.cours).subscribe(
      {
        next: (response: any) => {
          //Toast
          this.cours = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }
  
}
