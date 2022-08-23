// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { BasicDialogComponent } from './basic-dialog.component';

describe('BasicDialogComponent', () => {
  let component: BasicDialogComponent;
  let fixture: ComponentFixture<BasicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, OverlayModule],
      declarations: [BasicDialogComponent],
      providers: [MatDialog]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
