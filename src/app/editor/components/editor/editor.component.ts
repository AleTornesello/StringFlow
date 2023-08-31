import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AngularPlugin, Presets, AngularArea2D} from "rete-angular-plugin/16";
import {ClassicPreset, GetSchemes, NodeEditor} from "rete";
import {Injector} from "@angular/core";
import {AreaExtensions, AreaPlugin} from "rete-area-plugin";
import {ConnectionPlugin, Presets as ConnectionPresets} from "rete-connection-plugin";
import {addCustomBackground} from "../../../shared/utils/editor/custom-background";
import {EditorService} from "../../../shared/services/editor.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  @ViewChild("editor") editorEl!: ElementRef;

  constructor(private _editorService: EditorService) {
  }

  public ngAfterViewInit() {
    const el = this.editorEl.nativeElement;

    if (el) {
      this._editorService.createEditor(el);
    }
  }

  // private async _createEditor(container: HTMLElement) {
  //   return await this._editorService.createEditor(container);
  // }
}
