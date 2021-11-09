// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMenuComponent } from './select-menu.component';

describe('SelectMenuComponent', () => {
  let component: SelectMenuComponent;
  let fixture: ComponentFixture<SelectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectMenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
