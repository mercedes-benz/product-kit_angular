// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'kit-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  constructor(public dialogRef: MatDialogRef<DialogContentComponent>) {}

  onButtonClick(): void {
    // this.dialogRef.close(); // Example to close the dialog
  }
}
