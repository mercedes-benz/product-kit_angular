// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DialogsComponent } from './dialogs.component';

describe('DialogsComponent', () => {
  let component: DialogsComponent;
  let fixture: ComponentFixture<DialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogsComponent],
      providers: [MatDialog, { provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
