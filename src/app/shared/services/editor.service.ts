import {Injectable, Injector} from '@angular/core';
import {ClassicPreset, GetSchemes, NodeEditor} from "rete";
import {AreaExtensions, AreaPlugin} from "rete-area-plugin";
import {ConnectionPlugin, Presets as ConnectionPresets} from "rete-connection-plugin";
import {addCustomBackground} from "../utils/editor/custom-background";
import {AngularArea2D, AngularPlugin, ControlComponent, Presets} from "rete-angular-plugin/16";
import {Subject} from "rxjs";
import {NodeComponent} from "../../editor/components/node/node.component";
import {PortType, TypedOutput} from "../utils/editor/ports";
import {SocketComponent} from "../../editor/components/socket/socket.component";
import {
  LabeledInputComponent,
  LabeledInputControl
} from "../../editor/components/controls/labeled-input/labeled-input.component";

type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;

type AreaExtra = AngularArea2D<Schemes>;

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private _socket?: ClassicPreset.Socket;
  private _editor?: NodeEditor<Schemes>;
  private _area?: AreaPlugin<Schemes, AreaExtra>;
  private _connection?: ConnectionPlugin<Schemes, AreaExtra>;
  private _render?: AngularPlugin<Schemes, AreaExtra>;

  public $afterInit: Subject<void>;

  public get socket(): ClassicPreset.Socket | undefined {
    return this._socket;
  }

  constructor(private _injector: Injector) {
    this.$afterInit = new Subject<void>();
  }

  public async createEditor(container: HTMLElement) {
    this._socket = new ClassicPreset.Socket("socket");

    this._editor = new NodeEditor<Schemes>();
    this._area = new AreaPlugin<Schemes, AreaExtra>(container);
    this._connection = new ConnectionPlugin<Schemes, AreaExtra>();
    this._render = new AngularPlugin<Schemes, AreaExtra>({injector: this._injector});

    AreaExtensions.selectableNodes(this._area, AreaExtensions.selector(), {
      accumulating: AreaExtensions.accumulateOnCtrl()
    });

    this._render.addPreset(
      Presets.classic.setup({
        customize: {
          node() {
            return NodeComponent;
          },
          socket() {
            return SocketComponent;
          },
          control(data) {
            if(data.payload instanceof LabeledInputControl) {
              return LabeledInputComponent
            }

            return ControlComponent
          }
        }
      })
    );

    this._render.addPreset(Presets.classic.setup());

    this._connection.addPreset(ConnectionPresets.classic.setup());

    this._editor.use(this._area);
    this._area.use(this._connection);
    this._area.use(this._render);

    addCustomBackground(this._area);

    AreaExtensions.simpleNodesOrder(this._area);




    const a = new ClassicPreset.Node("A");
    a.addControl(
      "a",
      new LabeledInputControl("text", "Input", {initial: "hello"})
    );
    a.addControl(
      "b",
      new LabeledInputControl("text", "Input", {initial: "hello"})
    );
    a.addOutput("a", new TypedOutput(this._socket, PortType.STRING, "Output"));
    await this._editor.addNode(a);

    const b = new ClassicPreset.Node("B");
    b.addControl(
      "b",
      new ClassicPreset.InputControl("text", {initial: "hello"})
    );
    b.addInput("b", new ClassicPreset.Input(this._socket, "Input"));
    await this._editor.addNode(b);

    await this._area.translate(b.id, {x: 320, y: 0});

    await this._editor.addConnection(new ClassicPreset.Connection(a, "a", b, "b"));




    await AreaExtensions.zoomAt(this._area, this._editor.getNodes());

    this.$afterInit.next();

    return () => this._area!.destroy();
  }

  public async addNode(node: ClassicPreset.Node) {
    if(!this._editor) {
      return;
    }

    await this._editor.addNode(node)
  }
}
