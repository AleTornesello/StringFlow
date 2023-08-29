import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';

@Component({
  selector: 'app-unsaved-changes-popup',
  templateUrl: './unsaved-changes-popup.component.html',
  styleUrls: ['./unsaved-changes-popup.component.scss'],
})
export class UnsavedChangesPopupComponent {
  @ViewChild('dialog') dialog?: SimpleDialogComponent;

  @Input() changesContext: string = 'common.defaultLeaveParagraph';

  @Output() exitWithUnsaved = new EventEmitter<void>();

  constructor() {}

  public show() {
    this.dialog?.show();
  }

  public close() {
    this.dialog?.close();
  }

  public onExitWithUnsaved() {
    this.close();
    this.exitWithUnsaved.emit();
  }
}
