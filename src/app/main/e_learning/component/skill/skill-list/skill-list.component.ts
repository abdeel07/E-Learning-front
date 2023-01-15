import { Component, OnInit } from '@angular/core';
import { Skill } from 'app/main/e_learning/model/skill';
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillService } from 'app/main/e_learning/service/skill.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  public skill: Skill = {
    id: null,
    title: ""
  };

  public basicSelectedOption = 10;
  public ColumnMode = ColumnMode;

  title = "";
  private modal = null;
  private id = 0;

  public data?: Skill[];

  submitted = false;

  public skillForm: FormGroup = new FormGroup({
    title: new FormControl(""),
  });

  constructor(
    private modalService: NgbModal, 
    private formBuilder: FormBuilder, 
    private skillService: SkillService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(){
    this.skillService.getSkills().subscribe(
      {
        next : (response: any) =>{
          this.data = response;
        },
        error: (err) => {
          console.error(err);
        },
      }
    );
  }

  getByTitle(){
    this.skillService.getByTitle(this.title).subscribe(
      {
        next : (response: any) =>{
          this.data = response;
        },
        error: (err) => {
          console.error(err);
        },
      }
    );
  }

  addSkill(){
    this.skillService.addSkill(this.skill).subscribe(
      {
        next : (response : any) => {
          this.ngOnInit();
          this.toastrSuccess(" Skill added successfully !! ");
        },
        error: (err) => {
          console.error(err);
          alert(err.message);
        },
      }
    );
    this.emptyfields();
  }

  modalOpen(modalBasic) {
    this.skillForm = this.formBuilder.group({
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
    });
    this.modalService.open(modalBasic, {
      centered: true,
      windowClass: "modal modal-primary",
      size: "lg",
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.skillForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.skillForm.invalid) {
      this.toastrWarning("Oooops!! Something went wrong .")
      return;
    }
    this.skill = this.skillForm.value;

    this.addSkill();
  }

  onReset(): void {
    this.submitted = false;
    this.skillForm.reset();
  }

  emptyfields() {
    this.skillForm = this.formBuilder.group({
      title: [
        '',
      ],
    });
  }

  toastrSuccess(message: string) {
    this.toastr.success('👋 ' + message, 'Success!', {
      toastClass: 'toast ngx-toastr',
      positionClass: 'toast-top-right'
    });
  }

  // Warning
  toastrWarning(message: string) {
    this.toastr.warning('👋 ' + message, 'Warning!', {
      toastClass: 'toast ngx-toastr',
      positionClass: 'toast-top-right'
    });
  }

   // ------------ Edit skill ------------

   modalEdit(modalPrimaryedit, id) {
    this.skillService.getSkill(id).subscribe({
      next: (data) => {
        this.skill = data;
        this.skillForm = this.formBuilder.group({
          title: [
            this.skill.title,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.pattern("[a-zA-Z ]*"),
            ],
          ]
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
    this.modalService.open(modalPrimaryedit, {
      centered: true,
      windowClass: "modal modal-primary",
    });
  }


  edit(): void {
    if (this.skillForm.invalid) {
      this.toastrWarning("Oooops!! Something went wrong .")
      return;
    }
    this.skill.title = this.skillForm.value.title;

    this.updateSkill(this.skill);
  }

  updateSkill(skill: Skill): void {
    this.skillService.updateSkill(skill.id, skill).subscribe({
      next: (data) => {
        this.getSkills();
        this.modalService.dismissAll();
        this.toastrSuccess(" Skill updated successfully !! ");
      },
      error: (err) => {
        console.error(err);
      },
    });
    this.emptyfields();
  }

   // ------------- delete -------------- //

   modalOpenDanger(modalDanger, id: any) {
    this.id = id;
    this.modal = this.modalService.open(modalDanger, {
      centered: true,
      windowClass: "modal modal-danger",
    });
  }


  public deleteData() {
    this.modal.close("Accept click");
    this.skillService.deleteSkill(this.id).subscribe({
      next: () => {
        this.toastrSuccess(" Skill deleted successfully !! ");
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
