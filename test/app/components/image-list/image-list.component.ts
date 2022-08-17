// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  sourceLandscapeSmall = '/assets/images/pk_placeholder_landscape_small.png';
  sourcePortrait = '/assets/images/pk_placeholder_protrait.png';

  uniformTiles: any[] = [
    { text: 'Text Label', src: this.sourceLandscapeSmall },
    { text: 'Text Label', src: this.sourceLandscapeSmall },
    { text: 'Text Label', src: this.sourceLandscapeSmall },
    { text: 'Text Label', src: this.sourceLandscapeSmall },
    { text: 'Text Label', src: this.sourceLandscapeSmall },
    { text: 'Text Label', src: this.sourceLandscapeSmall }
  ];

  tiles: any[] = [
    {
      text: 'Text Label',
      cols: 1,
      rows: 4,
      src: this.sourcePortrait
    },
    { text: 'Text Label', cols: 1, rows: 2, src: this.sourceLandscapeSmall },
    {
      text: 'Text Label',
      cols: 1,
      rows: 4,
      src: this.sourcePortrait
    },
    { text: 'Text Label', cols: 1, rows: 2, src: this.sourceLandscapeSmall },
    { text: 'Text Label', cols: 1, rows: 2, src: this.sourceLandscapeSmall },
    { text: 'Text Label', cols: 1, rows: 2, src: this.sourceLandscapeSmall }
  ];

  constructor() {}

  ngOnInit(): void {}
}
