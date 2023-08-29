import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AngularPlugin, Presets, AngularArea2D} from "rete-angular-plugin/16";
import {ClassicPreset, GetSchemes, NodeEditor} from "rete";
import {Injector} from "@angular/core";
import {AreaExtensions, AreaPlugin} from "rete-area-plugin";
import {ConnectionPlugin, Presets as ConnectionPresets} from "rete-connection-plugin";

type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;

type AreaExtra = AngularArea2D<Schemes>;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  @ViewChild("editor") editorEl!: ElementRef;

  constructor(private _injector: Injector) {
  }

  public ngAfterViewInit() {
    const el = this.editorEl.nativeElement;

    if (el) {
      this._createEditor(el);
    }
  }

  private async _createEditor(container: HTMLElement) {
    const socket = new ClassicPreset.Socket("socket");

    const editor = new NodeEditor<Schemes>();
    const area = new AreaPlugin<Schemes, AreaExtra>(container);
    const connection = new ConnectionPlugin<Schemes, AreaExtra>();
    const render = new AngularPlugin<Schemes, AreaExtra>({injector: this._injector});

    AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
      accumulating: AreaExtensions.accumulateOnCtrl()
    });

    render.addPreset(Presets.classic.setup());

    connection.addPreset(ConnectionPresets.classic.setup());

    editor.use(area);
    area.use(connection);
    area.use(render);

    AreaExtensions.simpleNodesOrder(area);

    const a = new ClassicPreset.Node("A");
    a.addControl(
      "a",
      new ClassicPreset.InputControl("text", {initial: "hello"})
    );
    a.addOutput("a", new ClassicPreset.Output(socket));
    await editor.addNode(a);

    const b = new ClassicPreset.Node("B");
    b.addControl(
      "b",
      new ClassicPreset.InputControl("text", {initial: "hello"})
    );
    b.addInput("b", new ClassicPreset.Input(socket));
    await editor.addNode(b);

    await area.translate(b.id, {x: 320, y: 0});

    await editor.addConnection(new ClassicPreset.Connection(a, "a", b, "b"));

    await AreaExtensions.zoomAt(area, editor.getNodes());

    return () => area.destroy();
  }
}
