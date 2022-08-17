// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  activeItem = '';

  constructor() {}

  ngOnInit(): void {
    this.activeItem = 'inbox';
  }

  setActiveItem(item?: string): void {
    if (this.activeItem !== item) {
      this.activeItem = item;
      return;
    }
  }

  isItemActive(item: string): boolean {
    return this.activeItem === item;
  }
}
