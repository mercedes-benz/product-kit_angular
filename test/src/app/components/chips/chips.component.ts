// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  chips = [
    { selected: false, text: 'Body 2' },
    { selected: true, text: 'Body 2' },
    { selected: true, text: 'Body 2' }
  ];

  cancellableChips = [
    { selected: false, text: 'Body 2' },
    { selected: false, text: 'Body 2' },
    { selected: false, text: 'Body 2' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
