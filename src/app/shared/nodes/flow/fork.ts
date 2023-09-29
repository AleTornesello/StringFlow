import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";
import {SocketType, TypedInput, TypedOutput, TypedSocket} from "../../utils/editor/ports";
import { v4 as uuidv4 } from 'uuid';
import {DoubleButtonsControl} from "../../../editor/components/controls/double-buttons/double-buttons.component";

export class ForkNode extends NodeGenerator {

  public label: string = "Fork";
  override generate(socket?: ClassicPreset.Socket): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);

    const input = new TypedInput(TypedSocket.fromSocket(socket!, SocketType.ANY))
    node.addInput(input.id, input);

    const output1 = new TypedOutput(TypedSocket.fromSocket(socket!, SocketType.ANY))
    node.addOutput(output1.id, output1);

    const output2 = new TypedOutput(TypedSocket.fromSocket(socket!, SocketType.ANY))
    node.addOutput(output2.id, output2);

    node.addControl(uuidv4(), new DoubleButtonsControl(
      "right",
      undefined,
      "+",
      undefined,
      () => {
        const newOutput = new TypedOutput(TypedSocket.fromSocket(socket!, SocketType.ANY))
        node.addOutput(newOutput.id, newOutput);
      }
    ));
    return node;
  }
}
