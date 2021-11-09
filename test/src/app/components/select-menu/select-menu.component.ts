// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kit-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      selectMenuFilledError: new FormControl('', [Validators.required]),
      selectMenuOutlineError: new FormControl('', [Validators.required])
    });

    this.formGroup.get('selectMenuFilledError').markAsTouched();
    this.formGroup.get('selectMenuOutlineError').markAsTouched();
  }
}
