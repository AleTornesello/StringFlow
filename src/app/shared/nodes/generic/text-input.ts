import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";

export class TextInputNode extends NodeGenerator {

  public label: string = "Text input";
  override generate(socket?: ClassicPreset.Socket): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);
    node.addControl(
      "a",
      new ClassicPreset.InputControl("text", {initial: ""})
    );
    node.addOutput("a", new ClassicPreset.Output(socket!));
    return node;
  }
}
