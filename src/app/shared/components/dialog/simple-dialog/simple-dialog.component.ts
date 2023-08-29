import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss'],
})
export class SimpleDialogComponent {
  @Input() header: string;
  @Input() headerStyle: string = 'text-center';

  @Input() styleClass: string | undefined;
  @Input() closable: boolean = true;
  @Input() hideCloseButton: boolean = false;
  @Input() size: string = 'md';

  public faTimes: IconDefinition;
  public visible: boolean;

  constructor() {
    this.visible = false;
    this.header = '';
    this.faTimes = faTimes;
  }

  public show() {
    this.visible = true;
  }

  public close() {
    this.visible = false;
  }

  public getStyleClass(): string {
    return this.styleClass ?? '';
  }
  public getSize(): Object {
    let widthValue: string = '';
    let heightValue: string = '';
    let maxWidth = '75vw';
    switch (this.size) {
      case 'sm':
        widthValue = '45vw';
        break;

      case 'md':
        widthValue = '50vw';
        break;

      case 'lg':
        widthValue = '60vw';
        break;

      case 'xl':
        widthValue = '80vw';
        maxWidth = '90vw';

        break;
    }

    return { width: widthValue, height: heightValue, 'max-width': maxWidth };
  }
}
