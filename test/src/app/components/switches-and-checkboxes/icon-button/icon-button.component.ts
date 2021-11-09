// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  icon = 'music_note';
  constructor() {}

  ngOnInit(): void {}

  iconClicked(): void {
    this.icon = this.icon !== 'music_note' ? 'music_note' : 'music_off';
  }
}
