import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { SimpleDialogComponent } from 'src/app/shared/components/dialog/simple-dialog/simple-dialog.component';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent {
  @ViewChild('dialog') dialog: SimpleDialogComponent | undefined;

  @Output() confirm: EventEmitter<void>;

  public message: string | undefined;

  constructor() {
    this.confirm = new EventEmitter();
  }

  public show(message: string) {
    this.message = message;
    this.dialog?.show();
  }

  public close() {
    this.dialog?.close();
  }

  public onConfirm() {
    this.confirm.emit();
  }
}
