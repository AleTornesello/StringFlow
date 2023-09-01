import {ClassicPreset, NodeEditor} from "rete";
import {Socket} from "rete/_types/presets/classic";
import {Schemes} from "./types";

export enum SocketType {
  ANY,
  STRING,
  NUMBER,
  BOOLEAN
}

export class TypedInput extends ClassicPreset.Input<TypedSocket> {
  constructor(socket: TypedSocket, label?: string, multipleConnections?: boolean) {
    super(socket, label, multipleConnections);
  }
}

export class TypedOutput extends ClassicPreset.Output<TypedSocket> {

  constructor(socket: TypedSocket, label?: string, multipleConnections?: boolean) {
    super(socket, label, multipleConnections);
  }
}

export class TypedSocket extends ClassicPreset.Socket {
  public type: SocketType

  constructor(name: string, type: SocketType) {
    super(name);
    this.type = type;
  }

  public static fromSocket(socket: Socket, type: SocketType) {
    return new TypedSocket(socket.name, type);
  }

  public isCompatibleWith(socket: ClassicPreset.Socket) {
    if(socket instanceof TypedSocket) {
      return this.type === socket.type || this.type === SocketType.ANY || socket.type === SocketType.ANY;
    }
    return true;
  }
}

export const getConnectionSockets = (
  editor: NodeEditor<Schemes>,
  connection: Schemes["Connection"]
) => {
  const source = editor.getNode(connection.source);
  const target = editor.getNode(connection.target);

  const output =
    source &&
    (source.outputs as Record<string, ClassicPreset.Input<Socket>>)[connection.sourceOutput];
  const input =
    target && (target.inputs as Record<string, ClassicPreset.Output<Socket>>)[connection.targetInput];

  return {
    source: output?.socket,
    target: input?.socket
  };
}
