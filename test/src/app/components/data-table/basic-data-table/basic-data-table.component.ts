// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

const tableData: any[] = [
  { signal: 'Subtitle 2', status: 'Subtitle 2', severity: 'Subtitle 2' },
  { signal: 'Subtitle 2', status: 'Subtitle 2', severity: 'Subtitle 2' },
  { signal: 'Subtitle 2', status: 'Subtitle 2', severity: 'Subtitle 2' }
];

@Component({
  selector: 'kit-data-table',
  templateUrl: './basic-data-table.component.html',
  styleUrls: ['./basic-data-table.component.scss']
})
export class BasicDataTableComponent implements OnInit {
  dataSource = new MatTableDataSource<any>(tableData);
  selection = new SelectionModel<any>(true, [tableData[1], tableData[2]]);
  columns: string[] = ['select', 'signal', 'status', 'severity'];

  constructor() {}

  ngOnInit(): void {}

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
