import { Component, OnInit } from '@angular/core';
import { Cours } from 'app/main/e_learning/model/cours';
import { Skill } from 'app/main/e_learning/model/skill';
import { CoursService } from 'app/main/e_learning/service/cours.service';
import { SkillService } from 'app/main/e_learning/service/skill.service';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrls: ['./cours-add.component.scss']
})
export class CoursAddComponent implements OnInit {

  cours?: Cours;
  skills: Skill[];
  
  constructor(
    private coursService : CoursService,
    private skillService : SkillService
  ) { }

  ngOnInit(): void {
    this.getSkills();
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

  uploadImage($event: any) {

  }

  onSubmit(){
    this.coursService.addCourse(this.cours).subscribe(
      {
        next: (response: any) => {
          //Toast
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }
  
}
