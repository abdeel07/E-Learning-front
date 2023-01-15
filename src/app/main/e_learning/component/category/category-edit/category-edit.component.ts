import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'app/main/e_learning/model/category';
import { CategoryService } from 'app/main/e_learning/service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  categoryId: number = this.route.snapshot.params["category_id"];
  category : Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory(this.categoryId).subscribe(
      {
        next : (response : any) =>{
          this.category = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  onSubmit(){
    this.categoryService.updateCategory(this.categoryId, this.category).subscribe(
      {
        next : (response : any) => {
          //toast
        },
        error : (err) => {
          console.log(err);
        }
      }
    )
  }

  uploadImage($event){
    
  }

  deleteCategory(){
    this.categoryService.deleteCategory(this.categoryId).subscribe(
      {
        next : (response : any) => {
          //toast
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
  }
}
