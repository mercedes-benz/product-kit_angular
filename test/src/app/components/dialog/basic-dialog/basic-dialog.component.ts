// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'kit-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent {
  title = 'Headline 6';
  content =
    'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor' +
    ' Incididunt Ut Labore Et Dolore Magna Aliqua.';

  @ViewChild('dialogTemplate') public dialogTemplateRef: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogTemplateRef, {
      width: '420px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
