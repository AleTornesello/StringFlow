import {ChangeDetectorRef, Component, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ClassicPreset} from "rete";
import {setValue} from "@ngneat/transloco";

type InputControlOptions<N> = {
  /** Whether the control is readonly. Default is `false` */
  readonly?: boolean;
  /** Initial value of the control */
  initial?: N;
  /** Callback function that is called when the control value changes */
  change?: (value: N) => void;
};

export class LabeledInputControl<T extends 'text' | 'number', N = T extends 'text' ? string : number> extends ClassicPreset.Control {
  public type: T;
  public options?: InputControlOptions<N>;
  public value?: N;
  public readonly: boolean;
  public label: string;

  constructor(type: T, label: string, options?: InputControlOptions<N>) {
    super();
    this.type = type;
    this.options = options;
    this.value = options?.initial;
    this.readonly = options?.readonly ?? false;
    this.label = label;
  }

  setValue(value?: N): void {
    this.value = value;
    if (value !== undefined) {
      this.options?.change?.(value);
    }
  }
}

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.scss']
})
export class LabeledInputComponent<T extends 'text' | 'number'> implements OnChanges {
  @Input() data!: LabeledInputControl<T>;
  @Input() rendered!: any;

  constructor(private _cdr: ChangeDetectorRef) {
    this._cdr.detach()
  }

  @HostListener('pointerdown', ['$event'])
  public pointerdown(event: any) {
    event.stopPropagation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const seed = changes['seed']
    const data = changes['data']

    if ((seed && seed.currentValue !== seed.previousValue)
      || (data && data.currentValue !== data.previousValue)) {
      this._cdr.detectChanges()
    }
    requestAnimationFrame(() => this.rendered())
  }

  onChange(e: Event) {
    const target = e.target as HTMLInputElement
    const value = (this.data.type === 'number'
      ? +target.value
      : target.value) as ClassicPreset.InputControl<T>['value']

    this.data.setValue(value)
    this._cdr.detectChanges()
  }
}
