// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Kit Angular Component Overview';

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
