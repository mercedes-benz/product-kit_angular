// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { DialogContentComponent } from './dialog-content.component';

describe('DialogContentComponent', () => {
  let component: DialogContentComponent;
  let fixture: ComponentFixture<DialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContentComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
