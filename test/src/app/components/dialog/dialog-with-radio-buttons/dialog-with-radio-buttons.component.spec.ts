// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';

import { DialogWithRadioButtonsComponent } from './dialog-with-radio-buttons.component';

describe('DialogWithRadioButtonsComponent', () => {
  let component: DialogWithRadioButtonsComponent;
  let fixture: ComponentFixture<DialogWithRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, OverlayModule],
      declarations: [DialogWithRadioButtonsComponent],
      providers: [MatDialog, { provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWithRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
