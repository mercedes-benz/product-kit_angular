// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableSortComponent } from './data-table-sort.component';

describe('DataTableSortComponent', () => {
  let component: DataTableSortComponent;
  let fixture: ComponentFixture<DataTableSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableSortComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
