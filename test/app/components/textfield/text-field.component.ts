// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kit-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  hide = false;
  outlineField = new FormControl('', [Validators.required, Validators.maxLength(4)]);
  filledField = new FormControl('', [Validators.maxLength(4)]);
  outlineTextArea = new FormControl('', [Validators.maxLength(4)]);
  filledTextArea = new FormControl('', [Validators.maxLength(4)]);

  constructor() {}

  ngOnInit(): void {
    this.outlineField.patchValue('There is an error');
    this.outlineField.markAsTouched();

    this.filledField.patchValue('There is an error');
    this.filledField.markAsTouched();

    this.outlineTextArea.patchValue('There is an error');
    this.outlineTextArea.markAsTouched();

    this.filledTextArea.patchValue('There is an error');
    this.filledTextArea.markAsTouched();
  }
}
