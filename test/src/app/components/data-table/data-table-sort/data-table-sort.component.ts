// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'kit-data-table-sort',
  templateUrl: './data-table-sort.component.html',
  styleUrls: ['./data-table-sort.component.scss']
})
export class DataTableSortComponent {
  sortedData: any[];
  tableData: any[] = [
    { title: 'Subtitle 2', index: 24 },
    { title: 'Subtitle 2', index: 99 },
    { title: 'Subtitle 2', index: 2 }
  ];

  constructor() {
    this.sortedData = this.tableData.slice();
  }

  sortData(sort: Sort): void {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((first, second) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title':
          return this.compare(first.title, second.title, isAsc);
        case 'index':
          return this.compare(first.index, second.index, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
