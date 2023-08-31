import {ClassicPreset} from "rete";

export abstract class NodeGenerator {
  abstract label: string;
  abstract generate(socket?: ClassicPreset.Socket): ClassicPreset.Node;
}
