import {ClassicPreset} from "rete";
import {Socket} from "rete/_types/presets/classic";

export enum PortType {
  ANY,
  STRING,
  NUMBER,
  BOOLEAN
}

export class TypedInput<S extends Socket> extends ClassicPreset.Input<S> {
  public type: PortType

  constructor(socket: S, type: PortType, label?: string, multipleConnections?: boolean) {
    super(socket, label, multipleConnections);
    this.type = type;
  }
}

export class TypedOutput<S extends Socket> extends ClassicPreset.Output<S> {
  public type: PortType

  constructor(socket: S, type: PortType, label?: string, multipleConnections?: boolean) {
    super(socket, label, multipleConnections);
    this.type = type;
  }
}

