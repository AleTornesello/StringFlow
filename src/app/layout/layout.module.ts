import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmptyLayoutComponent } from "./components/empty-layout/app-empty-layout.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppDefaultLayoutComponent } from "./components/default-layout/app-default-layout.component";
import { AppTopBarComponent } from "./components/topbar/app-top-bar.component";
import { ToolbarModule } from "primeng/toolbar";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { TranslocoModule } from "@ngneat/transloco";
import { ListboxModule } from "primeng/listbox";
import { ToastModule } from 'primeng/toast';
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TreeModule } from "primeng/tree";


@NgModule({
  declarations: [
    AppEmptyLayoutComponent,
    AppDefaultLayoutComponent,
    AppTopBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ToolbarModule,
    SidebarModule,
    ButtonModule,
    TranslocoModule,
    ListboxModule,
    ToastModule,
    TreeModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class LayoutModule {
}
