import { Component, OnInit } from '@angular/core';
import { Category } from 'app/main/e_learning/model/category';
import { CategoryService } from 'app/main/e_learning/service/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  category : Category = {
    id: 0,
    title: "",
    description: "",
    img: ""
  };

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.error(this.category);
    this.categoryService.addCategory(this.category).subscribe(
      {
        next : (response : any) => {
          this.toastrSuccess(" Added !! ");
          this.category = response;
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
  }

  uploadImage($event){
    
  }

  toastrSuccess(message: string) {
    this.toastr.success('👋 ' + message, 'Success!', {
      toastClass: 'toast ngx-toastr',
      positionClass: 'toast-top-right'
    });
  }
}
