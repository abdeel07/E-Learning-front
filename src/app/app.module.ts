import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { ToastrModule } from "ngx-toastr"; // For auth after login toast
import { CoreCommonModule } from "@core/common.module";
import { CoreSidebarModule, CoreThemeCustomizerModule } from "@core/components";
import { CoreModule } from "@core/core.module";
import { coreConfig } from "app/app-config";
import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { SampleModule } from "app/main/sample/sample.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QuillModule } from 'ngx-quill';

import { CommonModule, DatePipe } from "@angular/common";
import { CoursDetailComponent } from "./main/e_learning/component/cours/cours-detail/cours-detail.component";
import { CoursListComponent } from "./main/e_learning/component/cours/cours-list/cours-list.component";
import { CoursEditComponent } from "./main/e_learning/component/cours/cours-edit/cours-edit.component";
import { CoursAddComponent } from "./main/e_learning/component/cours/cours-add/cours-add.component";
import { CategoryListComponent } from "./main/e_learning/component/category/category-list/category-list.component";
import { CategoryAddComponent } from "./main/e_learning/component/category/category-add/category-add.component";
import { SkillListComponent } from "./main/e_learning/component/skill/skill-list/skill-list.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CategoryEditComponent } from './main/e_learning/component/category/category-edit/category-edit.component';
import { DashboardComponent } from './main/e_learning/component/dashboard/dashboard.component';
import { AuthComponent } from './main/e_learning/component/auth/auth/auth.component';


const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'category',
    component: CategoryListComponent
  },
  {
    path: 'category/add',
    component: CategoryAddComponent,
  },
  {
    path: 'category/edit/:category_id',
    component: CategoryAddComponent,
  },
  {
    path: 'category/:category_id',
    component: CoursListComponent,
  },
  {
    path: "dash",
    component: DashboardComponent
  },
  {
    path: 'cours',
    component: CoursListComponent
  },
  {
    path: 'cours/add',
    component: CoursAddComponent,
  },
  {
    path: 'cours/edit/:cours_id',
    component: CoursEditComponent,
  },
  {
    path: 'cours/:cours_id',
    component: CoursDetailComponent,
  },
  {
    path: 'skill',
    component: SkillListComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CoursListComponent,
    CoursAddComponent,
    CoursEditComponent,
    CoursDetailComponent,
    SkillListComponent,
    CategoryEditComponent,
    DashboardComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    QuillModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled", // Add options right here
      relativeLinkResolution: "legacy",
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),
    // ToastrModule.forRoot({
    //   toastComponent: CustomToastComponent
    // }),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,

    ReactiveFormsModule,
    NgxDatatableModule,
    NgApexchartsModule,
    
    SweetAlert2Module.forRoot()
  ],


  bootstrap: [ AppComponent ],
})
export class AppModule {

}


