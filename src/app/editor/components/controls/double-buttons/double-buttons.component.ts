import {Component, Input} from '@angular/core';
import {ClassicPreset} from "rete";
import {v4 as uuidv4} from "uuid";

export class DoubleButtonsControl extends ClassicPreset.Control {
  constructor(
    public visibility: 'left' | 'right' | 'both',
    public labelLeft?: string,
    public labelRight?: string,
    public onClickLeft?: () => void,
    public onClickRight?: () => void
  ) {
    super();
    super.id = uuidv4();
  }
}

@Component({
  selector: 'app-double-buttons',
  templateUrl: './double-buttons.component.html',
  styleUrls: ['./double-buttons.component.scss']
})
export class DoubleButtonsComponent {
  @Input() data!: DoubleButtonsControl;

  public get leftLabel(): string {
    return this.data.labelLeft ?? '';
  }

  public get rightLabel(): string {
    return this.data.labelRight ?? '';
  }

  public get isLeftButtonVisible(): boolean {
    return this.data.visibility === 'left' || this.data.visibility === 'both';
  }

  public get isRightButtonVisible(): boolean {
    return this.data.visibility === 'right' || this.data.visibility === 'both';
  }

  public onClickLeft(): void {
    debugger
    this.data.onClickLeft?.();
  }

  public onClickRight(): void {
    debugger
    this.data.onClickRight?.();
  }
}
