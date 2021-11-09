// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataTableComponent } from './basic-data-table.component';

describe('DataTableComponent', () => {
  let component: BasicDataTableComponent;
  let fixture: ComponentFixture<BasicDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicDataTableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
