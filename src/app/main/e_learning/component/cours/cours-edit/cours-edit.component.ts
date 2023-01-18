import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'app/main/e_learning/model/cours';
import { Skill } from 'app/main/e_learning/model/skill';
import { CoursService } from 'app/main/e_learning/service/cours.service';
import { SkillService } from 'app/main/e_learning/service/skill.service';
import { repeaterAnimation } from '../cours-add/cours-add.animation';

@Component({
  selector: 'app-cours-edit',
  templateUrl: './cours-edit.component.html',
  styleUrls: ['./cours-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [repeaterAnimation]
  
})
export class CoursEditComponent implements OnInit {
  coursId: number = this.route.snapshot.params["cours_id"];
  cours?: Cours;
  skills: Skill[];
  
  constructor(
    private route: ActivatedRoute,
    private coursService : CoursService,
    private skillService : SkillService
  ) { }

  ngOnInit(): void {

    this.getCours();
    this.getSkills();
    
  }

  getCours() {
    this.coursService.getCours(this.coursId).subscribe(
      {
        next: (response: any) => {
          this.cours = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
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
    this.coursService.updateCourse(this.coursId, this.cours).subscribe(
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

  deleteCours(){
    this.coursService.deleteCourse(this.coursId).subscribe(
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
