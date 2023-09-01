import {ChangeDetectorRef, Component, HostBinding, Input, OnChanges} from '@angular/core';
import {ClassicPreset} from "rete";
import {SocketType, TypedInput, TypedOutput} from "../../../shared/utils/editor/ports";
import {LabeledInputControl} from "../controls/labeled-input/labeled-input.component";

interface PortInfo {
  id: string;
  label: string;
  socket: ClassicPreset.Socket;
  type?: string;
}

interface ControlInfo {
  label: string;
  control: ClassicPreset.Control
}

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnChanges {
  @Input() data!: ClassicPreset.Node;
  @Input() emit!: (data: any) => void;
  @Input() rendered!: () => void;

  seed = 0;

  @HostBinding("class.selected") get selected() {
    return this.data.selected;
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  ngOnChanges(): void {
    this.cdr.detectChanges();
    requestAnimationFrame(() => this.rendered());
    this.seed++; // force render sockets
  }

  public get inputs(): PortInfo[] {
    const inputs: PortInfo[] = [];

    if(this.data?.inputs) {
      Object.keys(this.data!.inputs).forEach((key) => {
        if (this.data!.inputs[key]) {
          inputs.push({
            id: this.data!.inputs[key]!.id,
            label: this.data!.inputs[key]!.label ?? '',
            socket: this.data!.inputs[key]!.socket,
            type: this.data!.inputs[key] instanceof TypedInput
              ? this._portTypeToString((this.data!.inputs[key]! as TypedInput).socket.type)
              : undefined
          });
        }
      });
    }

    return inputs;
  }

  public get outputs(): PortInfo[] {
    const outputs: PortInfo[] = [];

    if(this.data?.outputs) {
      Object.keys(this.data!.outputs).forEach((key) => {
        if (this.data!.outputs[key]) {
          outputs.push({
            id: this.data!.outputs[key]!.id,
            label: this.data!.outputs[key]!.label ?? '',
            socket: this.data!.outputs[key]!.socket,
            type: this.data!.outputs[key] instanceof TypedOutput
              ? this._portTypeToString((this.data!.outputs[key]! as TypedOutput).socket.type)
              : undefined
          });
        }
      });
    }

    return outputs;
  }

  public get controls(): ControlInfo[] {
    const controls: ControlInfo[] = [];

    if(this.data?.controls) {
      Object.keys(this.data!.controls).forEach((key) => {
        if (this.data!.controls[key]) {
          controls.push({
            label: this.data!.controls[key] instanceof LabeledInputControl
              ? (this.data!.controls[key]! as LabeledInputControl<any, any>).label
              : '',
            control: this.data!.controls[key]!
          });
        }
      });
    }

    return controls;
  }

  private _portTypeToString(type: SocketType): string {
    switch (type) {
      case SocketType.ANY:
        return 'Any';
      case SocketType.STRING:
        return 'Text';
      case SocketType.NUMBER:
        return 'Number';
      case SocketType.BOOLEAN:
        return 'Boolean';
    }
  }

  // sortByIndex(a: KeyValue<string, ClassicPreset.Output<ClassicPreset.Socket> | undefined>, b: KeyValue<string, ClassicPreset.Output<ClassicPreset.Socket> | undefined>): number {
  //   const ai = a.value!.index || 0;
  //   const bi = b.value!.index || 0;
  //
  //   return ai - bi;
  // }
}
