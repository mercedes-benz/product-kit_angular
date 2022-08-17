// SPDX-License-Identifier: MIT

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'kit-dialog-with-radio-buttons',
  templateUrl: './dialog-with-radio-buttons.component.html',
  styleUrls: ['./dialog-with-radio-buttons.component.scss']
})
export class DialogWithRadioButtonsComponent {
  title = 'Headline 6';
  @ViewChild('dialogTemplate') dialogTemplateRef: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogTemplateRef, {
      width: '280px',
      height: '280px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
