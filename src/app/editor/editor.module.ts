import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorComponent} from "./components/editor/editor.component";
import { NodeComponent } from './components/node/node.component';
import {ReteModule} from "rete-angular-plugin/16";
import { SocketComponent } from './components/socket/socket.component';
import { LabeledInputComponent } from './components/controls/labeled-input/labeled-input.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EditorComponent,
    NodeComponent,
    SocketComponent,
    LabeledInputComponent
  ],
  exports: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    ReteModule,
    InputTextModule,
    FormsModule
  ]
})
export class EditorModule { }
