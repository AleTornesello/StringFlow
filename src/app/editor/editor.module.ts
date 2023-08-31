import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorComponent} from "./components/editor/editor.component";
import { NodeComponent } from './components/node/node.component';
import {ReteModule} from "rete-angular-plugin/16";
import { SocketComponent } from './components/socket/socket.component';



@NgModule({
  declarations: [
    EditorComponent,
    NodeComponent,
    SocketComponent
  ],
  exports: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    ReteModule
  ]
})
export class EditorModule { }
