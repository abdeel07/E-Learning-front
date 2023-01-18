import { Component, OnInit } from '@angular/core';
import { Category } from 'app/main/e_learning/model/category';
import { CategoryService } from 'app/main/e_learning/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public searchText: any;
  public categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      {
        next: (data: any) => {
          this.categories = data;
        },
        error:(err) => {
            console.log(err);
        },
      }
    )
  }

  getByTitle(){
    if(this.searchText != ""){
      this.categoryService.getByTitle(this.searchText).subscribe(
        {
          next: (data: any) => {
            this.categories = data;
          },
          error:(err) => {
              console.log(err);
          },
        }
      )
    }
    else
      this.getCategories();
  }
}
