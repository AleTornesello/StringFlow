import {ClassicPreset} from "rete";
import {NodeGenerator} from "../../models/node/node-generation";
import {PortType, TypedInput, TypedOutput} from "../../utils/editor/ports";
import { v4 as uuidv4 } from 'uuid';

export class ForkNode extends NodeGenerator {

  public label: string = "Fork";
  override generate(socket?: ClassicPreset.Socket): ClassicPreset.Node {
    const node = new ClassicPreset.Node(this.label);
    node.addInput(uuidv4(), new TypedInput(socket!, PortType.ANY));
    node.addInput(uuidv4(), new TypedInput(socket!, PortType.ANY));
    node.addOutput(uuidv4(), new TypedOutput(socket!, PortType.ANY));
    return node;
  }
}
