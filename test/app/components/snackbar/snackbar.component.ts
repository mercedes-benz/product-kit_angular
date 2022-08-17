// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'kit-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  duration: number;

  constructor(private snackbar: MatSnackBar) {
    this.duration = 22700;
  }

  openSnackbar(message: string, action: string): void {
    this.snackbar.open(message, action, {
      duration: this.duration
    });
  }
}
