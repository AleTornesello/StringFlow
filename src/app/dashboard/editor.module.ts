import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPageComponent } from './components/dashboard-page/editor-page.component';
import { EditorRoutingModule } from './editor-routing.module';

import { TranslocoModule } from '@ngneat/transloco';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ListboxModule } from 'primeng/listbox';
import {ButtonModule} from "primeng/button";
import { PaginatorModule } from "primeng/paginator";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    EditorPageComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        ListboxModule,
        ButtonModule,
        TranslocoModule,
        FontAwesomeModule,
        EditorRoutingModule,
        PaginatorModule,
        ReactiveFormsModule,
    ],
})
export class EditorModule {}
