import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";

export class ConcatTextNode extends NodeGenerator {

  public label: string = "Concat text";
  override generate(socket?: ClassicPreset.Socket): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);
    node.addInput("a", new ClassicPreset.Input(socket!));
    node.addOutput("a", new ClassicPreset.Output(socket!));
    return node;
  }
}
