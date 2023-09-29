import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";
import {SocketType, TypedInput, TypedOutput, TypedSocket} from "../../utils/editor/ports";

import {DoubleButtonsControl} from "../../../editor/components/controls/double-buttons/double-buttons.component";

export class ConcatTextNode extends NodeGenerator {

  public label: string = "Concat text";

  override generate(socket?: ClassicPreset.Socket, change?: () => void, update?: (type: "node" | "connection" | "socket" | "control", id: string) => void): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);

    const in1 = new TypedInput(TypedSocket.fromSocket(socket!, SocketType.STRING));
    in1.addControl(
      new ClassicPreset.InputControl("text", {initial: "", change})
    );
    node.addInput(in1.id, in1);

    const in2 = new TypedInput(TypedSocket.fromSocket(socket!, SocketType.STRING));
    in2.addControl(
      new ClassicPreset.InputControl("text", {initial: "", change})
    );
    node.addInput(in2.id, in2);

    const addControl = new DoubleButtonsControl(
      "left",
      "+",
      undefined,
      () => {
        const newInput = new TypedInput(TypedSocket.fromSocket(socket!, SocketType.STRING));
        node.addInput(newInput.id, newInput);
        if (update) {
          update("node", node.id);
        }
      }
    )
    node.addControl(addControl.id, addControl);

    const output = new TypedOutput(TypedSocket.fromSocket(socket!, SocketType.STRING), "Output")
    node.addOutput(output.id, output);

    // @ts-ignore
    node["data"] = (inputs: { [key: string]: string[] }): { [output.id]: string } => {
      return {
        [output.id]: Object.values(inputs)
          .map((input) => input[0])
          .reduce((acc, value) => acc + value, "")
      };
    }

    return node;
  }
}
