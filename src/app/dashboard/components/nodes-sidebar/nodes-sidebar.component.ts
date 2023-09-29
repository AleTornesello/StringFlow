import {Component, DestroyRef, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {NodesGroup, NodeService} from "../../../shared/services/node.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {EditorService} from "../../../shared/services/editor.service";
import {NodeGenerator} from "../../../shared/models/node/node-generation";

@Component({
  selector: 'app-nodes-sidebar',
  templateUrl: './nodes-sidebar.component.html',
  styleUrls: ['./nodes-sidebar.component.scss']
})
export class NodesSidebarComponent {

  public faChevronRight: IconDefinition;
  public faChevronLeft: IconDefinition;
  public open: boolean;
  public controlsGroups: NodesGroup[]

  constructor(
    private _nodeService: NodeService,
    private _editorService: EditorService
  ) {
    this.faChevronRight = faChevronRight;
    this.faChevronLeft = faChevronLeft;
    this.open = true;
    this.controlsGroups = [];

    this._nodeService.$afterInit
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.controlsGroups = this._nodeService.nodesGroups;
      });
  }


  public get actionIcon() {
    return this.open ? this.faChevronLeft : this.faChevronRight;
  }

  public onSidebarActionClick() {
    this.open = !this.open;
  }

  public async onSelectNode(generator: NodeGenerator) {
    await this._editorService.addNode(
      generator.generate(
        this._editorService.socket,
        this._editorService.change,
        this._editorService.update
      )
    );
  }
}
