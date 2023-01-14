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

import { CommonModule, DatePipe } from "@angular/common";
import { CoursDetailComponent } from "./main/e_learning/component/cours/cours-detail/cours-detail.component";
import { CoursListComponent } from "./main/e_learning/component/cours/cours-list/cours-list.component";
import { CoursEditComponent } from "./main/e_learning/component/cours/cours-edit/cours-edit.component";
import { CoursAddComponent } from "./main/e_learning/component/cours/cours-add/cours-add.component";
import { CategoryListComponent } from "./main/e_learning/component/category/category-list/category-list.component";
import { CategoryAddComponent } from "./main/e_learning/component/category/category-add/category-add.component";
import { SkillListComponent } from "./main/e_learning/component/skill/skill-list/skill-list.component";
import { NgSelectModule } from "@ng-select/ng-select";


const appRoutes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./main/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "home",
    redirectTo: "home",
    pathMatch: "full",
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
    path: 'category',
    component: CategoryListComponent
  },
  {
    path: 'category/add',
    component: CategoryAddComponent,
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
    SkillListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
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
  ],


  bootstrap: [ AppComponent ],
})
export class AppModule {

}


