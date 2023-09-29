import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";
import {SocketType, TypedInput, TypedOutput, TypedSocket} from "../../utils/editor/ports";
import {LabeledInputControl} from "../../../editor/components/controls/labeled-input/labeled-input.component";

export class TextOutputNode extends NodeGenerator {

  public readonly label: string = "Text output";

  override generate(socket?: ClassicPreset.Socket, change?: () => void,  update?: (type: "node" | "connection" | "socket" | "control", id: string) => void): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);

    const outputControl = new LabeledInputControl("text", "Output", {initial: "", readonly: true})
    node.addControl(outputControl.id, outputControl);

    const input = new TypedInput(TypedSocket.fromSocket(socket!, SocketType.STRING), "Input");
    input.addControl(
      new ClassicPreset.InputControl("text", {initial: 0, change})
    );
    node.addInput(input.id, input);

    // @ts-ignore
    node["data"] = (inputs: { [key: string]: string[] }) => {
      const value = Object.values(inputs)[0][0];
      outputControl.setValue(value);
      if (update) {
        update("control", outputControl.id);
      }
    }

    return node;
  }
}
