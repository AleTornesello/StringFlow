import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";
import {SocketType, TypedOutput, TypedSocket} from "../../utils/editor/ports";
import {LabeledInputControl} from "../../../editor/components/controls/labeled-input/labeled-input.component";

export class TextInputNode extends NodeGenerator {

  public readonly label: string = "Text input";

  override generate(socket?: ClassicPreset.Socket, change?: () => void): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);

    const inputControl = new LabeledInputControl("text", "Input", {initial: "", change})
    node.addControl("a", inputControl);

    const output = new TypedOutput(TypedSocket.fromSocket(socket!, SocketType.STRING), "Output")
    node.addOutput(output.id, output);

    // @ts-ignore
    node["data"] = (): { [output.id]: string } => {
      return {
        [output.id]: inputControl.value as string ?? 0
      }
    }

    return node;
  }
}
