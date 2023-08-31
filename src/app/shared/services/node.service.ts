import {Injectable} from '@angular/core';
import {TextInputNode} from "../nodes/generic/text-input";
import {EditorService} from "./editor.service";
import {Subject} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NodeGenerator} from "../models/node/node-generation";
import {ConcatTextNode} from "../nodes/text/concat";
import {ForkNode} from "../nodes/flow/fork";

export interface NodesGroup {
  name: string;
  nodes: NodeGenerator[];
}

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  public $afterInit: Subject<void>;

  private _nodesGroups: NodesGroup[];

  constructor(private _editorService: EditorService) {
    this._nodesGroups = [];
    this.$afterInit = new Subject<void>();

    this._initGroups();

    _editorService.$afterInit
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this._initGroups();
      });
  }

  public get nodesGroups(): NodesGroup[] {
    return this._nodesGroups;
  }

  private _initGroups() {
    if (!this._editorService.socket) {
      return;
    }

    this._nodesGroups = [
      {
        name: "Generic",
        nodes: [
          new TextInputNode()
        ]
      },
      {
        name: "Text",
        nodes: [
          new ConcatTextNode()
        ]
      },
      {
        name: "Number",
        nodes: [
          new ConcatTextNode()
        ]
      },
      {
        name: "Flow",
        nodes: [
          new ForkNode()
        ]
      }
    ];

    this.$afterInit.next();
  }
}
