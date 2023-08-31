import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPageComponent } from './components/editor-page/editor-page.component';
import { HomeRoutingModule } from './home-routing.module';

import { TranslocoModule } from '@ngneat/transloco';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ListboxModule } from 'primeng/listbox';
import {ButtonModule} from "primeng/button";
import { PaginatorModule } from "primeng/paginator";
import { ReactiveFormsModule } from "@angular/forms";
import { NodesSidebarComponent } from './components/nodes-sidebar/nodes-sidebar.component';
import {AccordionModule} from "primeng/accordion";
import {EditorModule} from "../editor/editor.module";

@NgModule({
  declarations: [
    EditorPageComponent,
    NodesSidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ListboxModule,
    ButtonModule,
    TranslocoModule,
    FontAwesomeModule,
    HomeRoutingModule,
    PaginatorModule,
    ReactiveFormsModule,
    AccordionModule,
    EditorModule,
  ],
})
export class HomeModule {}
