import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'app/main/e_learning/model/comment';
import { Cours } from 'app/main/e_learning/model/cours';
import { CommentService } from 'app/main/e_learning/service/comment.service';
import { CoursService } from 'app/main/e_learning/service/cours.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.scss']
})
export class CoursDetailComponent implements OnInit {

  coursId: number = this.route.snapshot.params["cours_id"];
  cours?: Cours = {
    categoryId: 0,
    comments: [],
    description: "",
    id: 0,
    img: "",
    skills: [],
    title: ""
  }
  comment : Comment;

  commentForm = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    content: new FormControl("", Validators.required),
  });

  constructor( 
    private route: ActivatedRoute,
    private coursService : CoursService,
    private commentService : CommentService
  ) { }

  ngOnInit(): void {
    this.getCours();
    this.getComment();
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

  getComment(){
    this.commentService.getComments(this.coursId).subscribe(
      {
        next : (response : any) => {
          this.cours.comments = response;
        }
      }
    )
  }

  onSubmit(){
    if(this.commentForm.invalid){
      //Toast
      return;
    }
    this.comment = this.commentForm.value;
    this.comment.idCours = this.coursId;

    this.commentService.addComment(this.comment).subscribe(
      {
        next: (response: any) => {
          //Toast
          this.cours.comments.push(response);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
