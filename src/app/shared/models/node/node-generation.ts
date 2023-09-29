import {ClassicPreset} from "rete";

export abstract class NodeGenerator {
  abstract label: string;
  abstract generate(socket?: ClassicPreset.Socket, change?: () => void, update?: (type: "node" | "connection" | "socket" | "control", id: string) => void): ClassicPreset.Node;
}
